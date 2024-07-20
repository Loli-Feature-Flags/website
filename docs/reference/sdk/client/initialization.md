# Initialization

Creating a new `LoliClient` is as easy as importing the class and creating a new instance:

```ts
import { LoliClient, type LoliClientSpecLoader } from '@loli-feature-flags/loli-sdk';

const client = new LoliClient(
    async (validator) => {
        const data = await fetch("...").then(r => r.json());
        return validator(data);
    }
);
```

The class `LoliClient` accepts the following parameters:
- `specLoader: LoliClientSpecLoader` (**required**)
- `options?: LoliClientOptions` (optional)
- `specLoader?: LoliClientCallbacks` (optional)

They are explained in-depth in the following sections.
