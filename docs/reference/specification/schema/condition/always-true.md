# Always True Condition

An always true condition is a helper condition that, as the name indicates, evaluates always to `true`.

See at as a pseudo condition that can be used to create a [Feature Flag Rule](../feature-flag-rule/index.md)
that will always be evaluates to true and its `valuesOnMatch` be served as the feature flag value.
But why would you need that?

Very simple: Imagine you want to create a feature flag for a simple A/B test and have a string feature flag
outputting two variants.

You simply want 50% of users to get variant A and that the other 50% get variant B. No advanced targeting needed.
In this case you would simply:
- create a string feature flag
- add one string feature flag rule
- add an always true condition
- specify two `valuesOnMatch` values (variant A and B)

As the rule will always evaluate to true due to the always true condition, you have successfully set up
a "static and deterministic" A/B test.

The same applies for plain gradual rollouts of e.g. boolean feature flags. One rule, one always true condition,
and e.g. the value `true` with a 10% rollout percentage and the value `false` with a 90% rollout percentage.

## Schema

```json
{
  "type": "alwaysTrue"
}
```

## Attributes

### type

- Type: `"alwaysTrue"`
- Required

Denotes the condition object as an always true condition.
