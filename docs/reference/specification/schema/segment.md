# Segment

A segment is a wrapper around a [Condition Set](./condition-set.md) and acts as
a "reusable" condition set that can be used by feature flags and even other
segments.

The schema of a segment looks like that:

## Schema

```json
{
  "id": "jh2g34234",
  "name": "early-adopters",
  "conditionSet": {
    // condition set content
  }
}
```

## Attributes

### id

- Type: `string`
- Required

An ID that is unique across all Loli spec entities. The ID
is used only within the Loli spec.

### name

- Type: `string`
- Required
- Pattern: `/^[a-zA-Z0-9]+([-_][a-zA-Z0-9]+)*$/`

The name of the segment. It has to be unique across all segments of a Loli spec.

Must only contain letters and numbers separated by single dashes or underscores.

### conditionSet

- Type: `ConditionSet`
- Required

The segment's condition set describes the conditions to be checked. If the
condition set evaluates to `true`, the segment is evaluated as `true`.

For more details, check out [Condition Set](./condition-set.md).
