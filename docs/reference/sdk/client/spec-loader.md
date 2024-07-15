# Spec Loader

The spec loader as is used by a `LoliClient` to load the most recent
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

## Async by default

The spec loader is expected to return a `Promise` and works async by default.

You may specify an async function like so:

```ts
const specLoader : LoliClientSpecLoader = async () => {
    const apiResponse = await fetchLoliSpecFromApi();
    
    if ( !apiResponse.data ) {
        throw new Error("The specification was not found/undefined/null.");
    }
    
    return apiResponse.data;
};
```

You can also work without the `async` keyword:

```ts
const specLoader : LoliClientSpecLoader = () => {
    return fetchLoliSpecFromApi()
        .then(apiResponse => {
            if ( !apiResponse.data ) {
                throw new Error("The specification was not found/undefined/null.");
            }

            return apiResponse.data;
        });
};
```

## Note on caching

You are allowed and even supposed to access as many **read locations** in the loader as you wish.

This may include **reading from a distributed cache**.

Your loader then may look like:

```ts{2-6}
const specLoader : LoliClientSpecLoader = async () => {
    const cacheEntry = await cache.get("loli-spec");
    
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

::: warning
Please do not perform any write actions in the loader like writing
to a distributed cache. Please read the section [Side effects](#side-effects) to better
understand it.
:::

## Side effects

::: danger
A spec loader is never supposed to execute any side effects. It is
**strongly advised to only perform loading/get/fetch actions** in a spec loader.

The reason is simple: We advise you to only perform side effects like cache write
operations with **valid data/specification data**. This is not guaranteed in a
spec loader.
:::

::: tip
Instead, **use the `callbacks` option** of the `LoliClient` to execute
side effects on e.g. `specLoadedAndValidated` to store a loaded and
validated specification in a distributed cache.

Your client initialization code can then look like this:

```ts
const client = new LoliClient(specLoader, {}, {
    specLoadedAndValidated: (spec) => {
        cache.write("loli-spec", spec);
    }
});
```

For more details, read the sections [Callbacks](#callbacks).
:::
