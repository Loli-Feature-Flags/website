# Feature Flag Rule

A feature flag rule is part of a feature flag's targeting section. It describes
which values shall be returned as a feature flag's evaluation value
in case certain conditions are met.

For each feature flag subtype (boolean, number, string) exist separate
rule types:

- `boolean` feature flag: [Boolean Feature Flag Rule](./boolean)
- `number` feature flag: [Number Feature Flag Rule](./number)
- `string` feature flag: [String Feature Flag Rule](./string)

All feature flag rule types share some properties. These shared properties are
explained below.

## Schema

```json
{
  "enabled": true,
  "conditionSet": { 
    // condition set content 
  },
  
  // subtype specific attributes ...
}
```

## Attributes

### enabled

- Type: `boolean`
- Required

A rule can be turned on/off individually. The following table describes when a rule
is evaluated as part of a feature flag evaluation:

| `featureFlag.targeting.enabled` | `rule.enabled` | Is rule evaluated? |
|---------------------------------|----------------|--------------------|
| `true`                          | `true`         | yes                |
| `true`                          | `false`        | no                 |
| `false`                         | `true`         | no                 |
| `false`                         | `false`        | no                 |

### conditionSet

- Type: `ConditionSet`
- Required

The rule's condition set describes the conditions to be checked. If the
condition set evaluates to `true`, the rule is seen as a "match", and the
`valuesOnMatch` of the subtypes are used as the feature flag evaluation
result/value.

For more details, check out [Condition Set](../condition-set.md).

## Subtypes

- [Boolean Feature Flag Rule](./boolean)
- [Number Feature Flag Rule](./number)
- [String Feature Flag Rule](./string)
