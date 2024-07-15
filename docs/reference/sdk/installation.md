# Installation

## Package

::: code-group

```bash [npm]
npm add @loli-feature-flags/loli-sdk
```

```bash [yarn]
yarn add @loli-feature-flags/loli-sdk
```

```bash [pnpm]
pnpm add @loli-feature-flags/loli-sdk
```

```bash [bun]
bun add @loli-feature-flags/loli-sdk
```

:::

## Peer Dependencies

The SDK relies on the schema validation library [Zod](https://zod.dev/).

Zod is marked as a peer dependency of the SDK. The SDK expects you to install
that peer dependency.

Please install a version `>= 3.23.0`.

::: code-group

```bash [npm]
npm add zod
```

```bash [yarn]
yarn add zod
```

```bash [pnpm]
pnpm add zod
```

```bash [bun]
bun add zod
```

:::
