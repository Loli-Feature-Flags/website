# Multi Instance Services

We are now talking about services that have multiple running instances per
services. That applies to monoliths and microservices that can be scaled
horizontally (e.g. booting up more servers, serverless functions, etc.).

## General

When having multiple instances of a service that all need to evaluate
feature flags, you are facing an important decision:

- Is it okay, if the instances possibly have different feature flag specifications for a short amount of time? If yes, continue with: [Temporarily Inconsistent Evaluations](#temporarily-inconsistent-evaluations)
- Or is the guarantee necessary, that all service instance evaluate feature flags using the same specification at any point in time? If yes, continue with: [Consistent evaluations](#consistent-evaluations)

## Evaluation Location

Here we recommend the same as for [Single Instance Services](./single-instance-services): Evaluate feature flags
on the backend side. This way, the Loli specification that may hold sensitive data is never exposed to all users. 

## Temporarily Inconsistent Evaluations

The simplest case is that each service instance
- initiates a `LoliClient` instance,
- passes the [Spec Loader](../client/spec-loader) to the client,
- and uses it like normal.

No special logic inside the spec loader. As services possibly started at different times, their `LoliClient`
instance possibly fetch the Loli specification at different times.

When storing a new Loli specification at your storage location, it might happen that some service instances
temporarily have the newest version, while others still work with the old cached one.

**You can lower the impact** by reducing the [`specCacheStaleTimeMilliseconds`](../client/options#speccachestaletimemilliseconds).
The lower the stale time, the earlier instances automatically reload the specifications.

::: warning

But keep in mind that lowering `specCacheStaleTimeMilliseconds` can greatly increase the number/frequency of
specification reads. Depending on the storage you use, this can impact performance of the storage or can
increase costs (e.g. if you fetch from a storage like S3/Vercel Edge Config).

:::

## Consistent evaluations

If you instead need all service instances to (nearly) always evaluate with the same Loli
specification version/copy, you need to do some extra work respectively choose a 
specific primary storage solution for the Loli specification.

### Pushing Specification Changes

An efficient way to achieve a situation where all service instances have the same specifications is:

- Disable automatic spec reloads by setting [`specCacheStaleTimeMilliseconds`](../client/options#speccachestaletimemilliseconds) to `Infinity`,
- and install push mechanism when a new specification is stored
- that triggers every service instance to cause a spec reload via [`triggerSpecReload`](../client/other-functions#triggerspecreload). 

Ideally your multi instance service has already some broadcast system (for example via a message broker).
Sending a broadcast message could be used to tell every service instance: "Hey instance, please call `triggerSpecReload()`".

::: warning

This **greatly reduces** the timeframe where the service instance do not have the same
specification version, but the timeframe is not zero.

The spec loader may be faster for some instances and slower for others resulting in some services
having the newest specification earlier.

This means that the outlined approach does not give you a guarantee that all instances use the same
specification at any point in time.

:::

### Fast Primary Storage

Let's say you have a Redis instance. And persistent storage is enabled for that instance.

In this case, you can use such a Redis instance as the primary storage location for your
Loli feature flags specification.

Then you can configure your client with a disabled internal cache and a spec loader
which only reads from Redis and effectively becomes a "spec getter" for the client.

```ts
const client = new LoliClient(
    async (validator) => {
        const specifcation = await redis.get("loli-specification");

        if ( !specification ) {
            throw new Error("Loli feature flags specification could not be found in Redis.");
        }
        
        return validator(specification);
    },
    {
        // The internally cached spec gets immediately
        // stale which causes the spec loader to be
        // always called.
        specCacheStaleTimeMilliseconds: -1,

        // Using Infinity here makes the client always
        // wait for the spec loader to finish.
        specReloadMaxBlockingWaitMilliseconds: Infinity,
    }
);
```

::: tip

Using a primary storage solution like a Redis instance does not only give you a
guarantee that all services use the same specification.

It can also greatly reduce read costs for multi instance services compared to
e.g. each of your 20 instances fetching the specification from an API.

:::

::: warning

You do not have to use Redis for this. But we recommend that you
use a storage that enables _very fast reads_, so that feature flag
evaluations don't wait too long for the spec loader to finish.

:::

### Distributed Cache and Locks

If you can't use a storage with fast read capabilities **as the primary storage**, but still
have a distributed **cache** and **locking mechanisms**, you can also guarantee
- that all instances always use the same specification
- while only allowing one instance to fetch the specification from the primary storage and storing it in the distributed cache.

The following code example explains the pattern you have to use.

```ts
const client = new LoliClient(
    async (validator) => {
        const cachedSpecification = await distributedCache.get("loli-specification");
        
        if ( cachedSpecification ) {
            // As we control the cache and only put validated data to
            // the cache, we can assume the cached spec is valid and
            // skip the validator validation
            return validator(cachedSpecification, {
                _dangerous: {
                  assumeDataIsValidSpec: true
                }
            })
        }

        // Now we acquire a distributed lock/transaction and make sure
        // only one service in the end fetches the spec from the API.
        return distributedMutex.requestTransaction(async () => {
            // As possibly other instances also requested a transaction
            // we first check if already a cache entry exists, which would mean
            // another instance fetched from the API and put the spec to the cache.
            const cachedSpecification = await distributedCache.get("loli-specification");
  
            if ( cachedSpecification ) {
              // As we control the cache and only put validated data to
              // the cache, we can assume the cached spec is valid and
              // skip the validator validation
              return await validator(cachedSpecification, {
                _dangerous: {
                  assumeDataIsValidSpec: true
                }
              })
            }
            
            // Once instance is the selected one to fetch
            // the spec from the primary storage location.
            const spec = fetch("...").then(r => r.json());
            
            // The await keyword is important!
            return await validator(spec, {
                // We use this callback to write the validated
                // spec to the distributed cahce. Still as part
                // of the distributed transaction.
                receivedValidSpec: async (validSpec) => {
                    await distributedCache.put("loli-specification", validSpec)
                }
            });
        })
    },
    {
        // The internally cached spec gets immediately
        // stale which causes the spec loader to be
        // always called.
        specCacheStaleTimeMilliseconds: -1,

        // Using Infinity here makes the client always
        // wait for the spec loader to finish.
        specReloadMaxBlockingWaitMilliseconds: Infinity,
    }
);
```

::: tip

This pattern can also drastically reduce the nr. of reads from the primary storage location
(which is not the cache) which could also lead to a lower cost footprint.

:::
