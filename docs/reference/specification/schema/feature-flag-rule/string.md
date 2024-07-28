# String Feature Flag Rule

A string feature flag rule is a rule that intended for a [String Feature Flag](../feature-flag/string.md).

It has all the properties all feature flag rule subtypes have in common. For that,
check out [Feature Flag Rule](./index.md).

In addition to the shared properties, a string feature flag rule also
has the properties listed on this page.

The schema of a string feature flag rule looks like that:

```json
{
  "enabled": true,
  "conditionSet": {
    // ConditionSet content 
  },
  
  "valuesOnMatch": [
    {
      "value": "variant-a",
      "rolloutPercentage": 100
    }
  ]
}
```

## valuesOnMatch

- Type: Array of `{ value: string, rolloutPercentage: number }`
    - `value`: value to serve as feature flag evaluation value on condition set match
    - `rolloutPercentage`: number between 0 and 100
- Required
- Min. length: `1`

This array holds all values that shall be served when the rule is matched. It is an array
to support gradual rollouts, A/B testing, and multi-variate feature flags.

Each value on match entry has a `value` (the evaluation value to serve) and a `rolloutPercentage`
number between 0 and 100.

There has to be at least one value on match entry. The rollout percentages of all entries has
to exactly sum up to 100.

If there are multiple value on match entries and the corresponding value is matched,
the values are **deterministically** distributed across all evaluations based
on the given rollout percentages and based on [Rollout Discriminator Properties](../property.md#rolloutDiscriminator).
