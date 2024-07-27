# Schema

The [SDK](../../sdk) defines a `LoliSpec` type and a `LoliSpecSchema` [Zod](https://github.com/colinhacks/zod) schema.
These define the expected shape of a JSON Loli spec.

The Loli spec root object looks like that:

```json
{
  "featureFlags": [],
  "segments": [],
  "evaluationContext": {
    "properties": []
  }
}
```

## featureFlags

- Type: Array of [Feature Flag](./feature-flag.md)
- Required

This array holds all feature flags you have defined. These can be evaluated in the end.

## segments

- Type: Array of [Segment](./segment.md)
- Required

This array holds all segments you have defined. These can be used in conditions within
feature flags and even in other segments.

## evaluationContext

- Type: [Evaluation Context](./evaluation-context.md)
- Required
