# Boolean Feature Flag

A boolean feature flag produces boolean evaluation values and is
denoted by a `type` value of `"boolean"`.

Boolean feature flags have the shared feature flag properties as described in
[Feature Flag](./index.md) and has the additional properties on this page.

The schema for a boolean feature flag looks roughly like this:

## Schema

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

## Attributes

### type

- Type: `"boolean"`
- Required

Designated the feature flag object as a boolean feature flag.

### targeting

- Type: `{ enabled: boolean, rules: BooleanFeatureFlagRule[] }`
- Required

An object describing targeting rules which can be turned on or off
completely or individually.

#### enabled

- Type: `boolean`
- Required

If `true`, the `rules` are checked during the feature flag evaluation.

If `false`, all `rules` are ignored and the `defaultValue` is used
as the evaluation value.

#### rules

- Type: Array of `BooleanFeatureFlagRule`
- Required

An array of zero to N-many rules that can have conditions and specified
output values in case the conditions are met.

The order of the rules determines the evaluation order. Rules are evaluated
from front to end. If a rule's conditions are met, it's `valuesOnMatch`
(check out rule details) are returned as the evaluation value.

If no rules' conditions are met, the `defaultValue` of the feature flag
is returned as the evaluation value.

Check out [Boolean Feature Flag Rule](../feature-flag-rule/boolean.md) for more details.

### defaultValue

- Type: `boolean`
- Required

The default value to be returned as the feature flag's evaluation value
if `targeting.enabled` is set to `false`.
