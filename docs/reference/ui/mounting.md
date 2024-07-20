# Mounting

You need to mount an instance of the management UI via the function
`mountLoliUi`.

## General

The function accepts two parameters:
- `container: HTMLElement` (**required**)
- `options?: LoliUiMountOptions` (optional)

The `container` element is the element the management UI will be added to.

The function returns an object with all interface methods of type `LoliUiInterface`.

## Packaged Version

If you installed the NPM package, you can do the following:

```ts
import {
    mountLoliUi,
    type LoliUiMountOptions,
    type LoliUiInterface
} from "@loli-feature-flags/loli-ui";

const uiOptions : LoliUiMountOptions = { /*...*/ };

const uiInterface : LoliUiInterface = mountLoliUi(
    document.querySelector("#loli-ui-container"),
    uiOptions
);
```

## UMD/ESM Version

### Access Function

If you installed the Loli UI via a `<script>` tag, the `mountLoliUi` function
is globally available. You can access it like so:

```html
<script>
    const uiInterface = mountLoliUi(
        document.querySelector("#loli-ui-container"),
        { /*...*/ }
    );
</script>
```

Or via the `window` object:

```html {2}
<script>
    const uiInterface = window.mountLoliUi(
        document.querySelector("#loli-ui-container"),
        { /*...*/ }
    );
</script>
```

### Wait For Library

If the Loli UI script is installed via `defer` script, the `mountLoliUi` function
is not directly available.

But the Loli UI library script fires a custom event when the library
is ready to be used. You can listen for it like so:

```html {2}
<script>
    window.addEventListener("loli-ui-library-available", () => {
        const uiInterface = window.mountLoliUi(
                document.querySelector("#loli-ui-container"),
                { /*...*/ }
        );
    };
</script>
```
