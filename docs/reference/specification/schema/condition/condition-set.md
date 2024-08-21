# Condition Set Condition

A condition set condition enables evaluating a subset of conditions – a sub [Condition Set](../condition-set.md).
This allows nesting condition sets that have different condition set operators allowing to for example mix
`and`, `or` sets.

The condition will evaluate to `true`, if the condition set evaluates to `true`.

## Schema

```json
{
  "type": "conditionSet",
  "conditionSet": {
    /* condition set data */
  }
}
```

## Attributes

### type

- Type: `"conditionSet"`
- Required

Denotes the condition object as a condition set condition.

### conditionSet

- Type: [`ConditionSet`](../condition-set.md)
- Required

The condition set that shall be evaluated.
