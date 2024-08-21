# Segment Condition

A segment condition is a condition that can reference a [Segment](../segment.md) that
shall be evaluated. The segment's evaluation result is then compared against the condition's
[`operator`](#operator) to get the condition's evaluated value.

| Operator \ Segment value  | `true`      | `false`   |
|---------------------------|-------------|-----------|
| `"isTrue"`                | `true`      | `false`   |
| `"isFalse"`               | `false`     | `true`    |


## Schema

```json
{
  "type": "segment",
  "segmentId": "567as4d46asd",
  "operator": "isTrue"
}
```

## Attributes

### type

- Type: `"segment"`
- Required

Denotes the condition object as a segment condition.

### segmentId

- Type: `string`
- Required

Denotes the segment that shall be evaluated by the given ID.
The segment's evaluation result will then be compared against the
condition's `operator` to come up with the condition's evaluation
result.

### operator

- Type: [`SegmentConditionOperator`](#segmentconditionoperator)
- Required

The operator to be used when evaluating the condition and the evaluation
result of the linked segment.

## Utility Types

### SegmentConditionOperator

Type: `"isTrue" | "isFalse"`

Operators and what they do:
- `"isTrue"`: Condition evaluates to `true` if the segment itself evaluates to `true`.
- `"isFalse"`: Condition evaluates to `true` if the segment itself evaluates to `false`.


