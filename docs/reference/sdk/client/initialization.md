# Initialization

Creating a new `LoliClient` is as easy as importing the class and creating a new instance:

```ts{7}
import { LoliClient, type LoliClientSpecLoader } from '@loli-feature-flags/loli-sdk';

const specLoader : LoliClientSpecLoader = async (processor) => {
    const data = await fetch("...").then(r => r.json());
    return processor(data);
};

const client = new LoliClient(specLoader);
```

The class `LoliClient` accepts the following parameters:
- `specLoader: LoliClientSpecLoader` (**required**)
- `options: LoliClientOptions` (optional)
- `specLoader: LoliClientCallbacks` (optional)

They are explained in-depth in the following sections.
