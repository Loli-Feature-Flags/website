# Schema

The [SDK](../../sdk) defines a `LoliSpec` type and a `LoliSpecSchema` [Zod](https://github.com/colinhacks/zod) schema.
These define the expected shape of a JSON Loli spec.

The Loli spec root object looks like that:

```json
{
  "schemaVersion": 1,
  "featureFlags": [],
  "segments": [],
  "evaluationContext": {
    "properties": []
  }
}
```

::: info

Feature flags, segments, and evaluation context properties are seen as
Loli spec **entities**. So whenever the term "spec entity" is used, it can
mean a feature flag, segment, property.

::: 

## schemaVersion

- Type: `number`
- Valid values: `1`
- Required

The schema version denotes which Loli spec version is used. This might become relevant
for the future, when new non-backwards-compatible changes/additions to the specification
are introduced.

Then Loli spec consumers can correctly differentiate Loli spec versions based on this field
and work with them correctly.

## featureFlags

- Type: Array of [Feature Flag](feature-flag/index)
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
