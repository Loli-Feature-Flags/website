# Spec Loader

A spec loader is used by a `LoliClient` to load the most recent
Loli specification whenever needed. The client does not care what the loader does,
it only cares about the returned result.

## Result

The result must either be a `string` or an `object`.

If the loader returns a `string` value, the client assumes the string to be
a JSON string/stringified Loli specification. In this case, the client validates
that the given string is valid JSON, that the JSON conforms to the Loli specification
schema and has no semantic issues.

If the loader returns an `object` value, the client assumes the object to be
a Loli specification object. In this case, the client only validates that the object
conforms to the Loli specification schema and has no semantic issues.

::: tip
If you want the loader to indicate "specification not found", always
**throw an error**. A spec loader is not supposed to return `undefined` or `null`.

The client will handle errors thrown inside the loader correctly.
:::

## Processor

### General

To be more precise, the result of a spec loader must be the return result of
a `processor` invocation.

A spec loader is called by a `LoliClient` with a `processor` function as an argument.

The `processor` function validates the loaded data for you and checks that the loaded data
is a valid Loli specification schema and has no semantic issues.

### Correct usage

The LoliClient only accepts spec loader results that were produced by the
given `processor` function.

```ts
// Correct ✅
const client = new LoliClient(
    async (processor) => {
        return processor(/* ... */);
    }
);

// Incorrect ❌
const client = new LoliClient(
    async (processor) => {
        return { /* ... */ }
    }
);
```

::: danger

There is no way to bypass calling the `processor` function. There is also no way
to tamper the data returned by the `processor` before returning it from the spec loader.

The LoliClient will detect if the `processor` was not called or if the data was tampered.

:::

## Async by default

The spec loader is expected to return a `Promise` and works async by default.

You may specify an async function like so:

```ts
const specLoader : LoliClientSpecLoader = async (processor) => {
    const apiResponse = await fetchLoliSpecFromApi();
    
    if ( !apiResponse.data ) {
        throw new Error("The specification was not found/undefined/null.");
    }
    
    return processor(apiResponse.data);
};
```

## Note on external caches

You are allowed and even supposed to access as many **storage locations** in the loader as you wish.

This may include **reading from a external/distributed cache**.

Your loader then may look like:

```ts{2-6}
const specLoader : LoliClientSpecLoader = async () => {
    const cacheEntry = await distributedCache.get("loli-spec");
    
    if ( cacheEntry ) {
        return cacheEntry;
    }
    
    const apiResponse = await fetchLoliSpecFromApi();
    
    if ( !apiResponse.data ) {
        throw new Error("The specification was not found/undefined/null.");
    }
    
    return apiResponse.data;
};
```

## Side effects

A side effect can be for an example writing to a distributed cache inside the spec loader.

We advise you to think about any side effects beforehand. We recommend to for example only
write a validated Loli spec 

There are two categories of side effects: Side effects that need to run as part of the spec loader.
For example to run as part of a distributed lock transaction.

And side effects that can run after the spec loader.

### During spec loader execution

If you want to execute some code (even async one) as part of the spec loader
with validated data (or invalid one), you can use the callbacks of the
`processor` function a spec loader gets.

The callback `receivedInvalidData` is executed if the specification validation
performed by the `processor` fails.

The callback `receivedValidSpec` is executed if the validation succeeds.

Both callbacks are optional and can return promises. The `processor` function will
first return when the callbacks resolve.

```ts
const client = new LoliClient(
    async (processor) => {
        const spec = await fetch("...").then(r => r.json());
        
        return processor(spec, {
            receivedInvalidData: async (invalidData, error) => {
                console.error("Data was invalid.", invalidData, error);
            },
            receivedValidSpec: async (validSpec) => {
                await distributedCache.put("loli-specification", validSpec);
            }
        });
    }
);
```

::: tip

If you want the callbacks to participate in a surrounding async transaction, make
sure to add the `await` keywords correctly:

```ts {7,16}
const client = new LoliClient(
    async (processor) => {
        /* ... */
        
        return await distributedMutex.transaction(async () => {
            return processor(spec, { // [!code --]
            return await processor(spec, { // [!code ++]
                receivedValidSpec: async (validSpec) => {
                    /* ... */
                }
            });
        });
    }
);
```

:::

### After spec loader finished

The `LoliClient` offers the callback [`specLoadedAndValidated`](./callbacks.md#specloadedandvalidated)
that is called after the spec loader successfully returned a valid Loli specification.

The callback receives the validated Loli specification.

```ts
const client = new LoliClient(specLoader, {}, {
    specLoadedAndValidated: (validatedSpec) => {
        console.log(validatedSpec);
    }
});
```

::: warning

The Loli specification object the callback receives is frozen via `Object.frozen()`.

This prevents any accidental specification changes.

:::

## Dangerous

### Disabling processor validation

It is possible to instruct the `processor` function to skip the validation
of the loaded data.

This option was implemented for advanced use cases – like distributed systems that
use a distributed cache as the primary specification source.

Read more about the topic: [Multi Instance Services](../recommendations/multi-instance-services)

::: danger

It is not recommended to disable the validation that the `processor` performs.
It ensures that the client works with a valid Loli specification.

If you skip the evaluation, it could lead to undesired evaluation results. A `LoliClient`
receives data from a spec loader with skipped validation will continue to work in
[emergency mode](./evaluation.md#emergency-mode).

To instruct the `processor` to skip data validation, do this:

```ts {6-8}
const client = new LoliClient(
    async (processor) => {
        /* ... */

        return await processor(spec, {
            _dangerous: {
                assumeDataIsValidSpec: true
            }
        });
    }
);
```

:::
