# Boolean Property Condition

A boolean property condition is meant to evaluate a [Property](../../property.md)
of type `boolean` – so a single number value.

## Schema

```json
{
  "propertyId": "kj9wqe6asd6",
  
  // Type specific attributes
  "type": "boolean",
  "operator": "isTrue"
}
```

## Attributes

### type

- Type: `"boolean"`
- Required

Denotes the condition object as a boolean property condition.

### operator

- Type: [`BooleanConditionOperators`](#booleanconditionoperator)
- Required

The operator to use when comparing an operand of the `operands` array against the property value.

## Utility Types

### BooleanConditionOperator

Type: `"isTrue" | "isFalse"`

Operators and what they do:
- `"isTrue"`: Checks if property value is `true` (JS `value === true`).
- `"isFalse"`: Checks if property value is `false` (JS `value === false`).

