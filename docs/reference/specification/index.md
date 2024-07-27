# Loli Feature Flags Specification

A Loli Feature Flags Specification (short "Loli spec") describes a feature flag environment setup including:
- properties that are evaluated by feature flags and segments
- segments that act as reusable condition sets
- feature flags that are evaluated based on conditions

The specification is written as JSON. The schema of the JSON is currently defined by the
[SDK](../sdk) via a [Zod](https://github.com/colinhacks/zod) Schema.

The smallest valid spec looks like this:


