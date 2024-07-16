# Client

The most convenient and safe way to evaluate feature flags is to use the `LoliClient`. 
It combines the following aspects:
- loading the Loli specification when needed
- validating schema and semantics of the specification
- internally caching the specification
- reloading the specification when the cache becomes stale
- offering evaluation functions
- serving emergency fallbacks in error scenarios

The `LoliClient` is a higher-level abstraction around all lower-level utility, parsing,
validation, and evaluation functions the SDK offers.

## Further Reads

- [Initialization](./initialization)
- [Spec Loader](./spec-loader)
- [Options](./options)
- [Callbacks](./callbacks)
- [Evaluation](./evaluation)
- [Other Functions](./other-functions)

