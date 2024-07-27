# Boolean Feature Flag

A boolean feature flag produces boolean evaluation values and is
denoted by a `type` value of `"boolean"`.

Boolean feature flags  have the shared feature flag properties as described in
[Feature Flag](./index.md) and has the additional properties on this page.

The schema for a boolean feature flag looks roughly like this:

```json
{
  "id": "...",
  "name": "...",
  "description": "...",
  
  // Type specific attributes
  "type": "boolean",
  "targeting": {
    "enabled": true,
    "rules": []
  },
  "defaultValue": false
}
```

## type

- Type: `"boolean"`
- Required

Designated the feature flag object as a boolean feature flag.

## targeting

- Type: `{ enabled: boolean, rules: BooleanFeatureFlagRule[] }`
- Required

An object describing targeting rules which can be turned on or off
completely or individually.

### enabled

- Type: `boolean`
- Required

If `true`, the `rules` are checked during the feature flag evaluation.

If `false`, all `rules` are ignored and the `defaultValue` is used
as the evaluation value.

### rules

- Type: Array of `BooleanFeatureFlagRule`
- Required

An array of zero to N-many rules that can have conditions and specified
output values in case the conditions are met.

Check out [Boolean Feature Flag Rule](./rules/boolean.md) for more details.

## defaultValue

- Type: `boolean`
- Required

The default value to be returned as the feature flag's evaluation value
if `targeting.enabled` is set to `false`.
