# Boolean Array Property Condition

A boolean array property condition is meant to evaluate a [Property](../../property.md)
of type `booleanArray` – so an array of boolean values.

## Schema

```json
{
  "propertyId": "er26asd54as",
  
  // Type specific attributes
  "type": "booleanArray",
  "propertyArrayQuantifier": "every",
  "operator": "isTrue"
}
```

## Attributes

### type

- Type: `"booleanArray"`
- Required

Denotes the condition object as a boolean array property condition.

### propertyArrayQuantifier

- Type: [`Quantifier`](#quantifier)
- Required

Tells the system how many of the property array values need to evaluate to true based on
the `operator`, `operandsQuantifier`, and `operands`.

### operator

- Type: [`BooleanArrayConditionOperators`](#booleanarrayconditionoperator)
- Required

The operator to use when comparing an operand of the `operands` array against one of the property array values.

## Utility Types

### BooleanArrayConditionOperator

Type: `"isTrue" | "isFalse" | "hasElements" | "hasNoElements"`

Operators and what they do:
- `"isTrue"`: Checks if a property array value is `true` (JS `value === true`).
- `"isFalse"`: Checks if a property array value is `false` (JS `value === false`).
- `"hasElements"`: Evaluates to `true`, if the property array has at least one element/value. Does not look at `propertyArrayQuantifier`, `operandsQuantifier`, and `operands`.
- `"hasNoElements"`: Evaluates to `true`, if the property array no elements/values. Does not look at `propertyArrayQuantifier`, `operandsQuantifier`, and `operands`.

### Quantifier

Type: `"some" | "every" | "notAny" | "notEvery"`

Quantifiers and what they do:
- `"some"`: Applies JS array `some` logic to property array values or operands array values. Example: `operands.some(operand => /* ... */)`
- `"every"`: Applies JS array `every` logic to property array values or operands array values. Example: `operands.every(operand => /* ... */)`
- `"notAny"`: Applies negation to JS array `some` logic to property array values or operands array values. Example: `!operands.some(operand => /* ... */)`
- `"notEvery"`: Applies negation to JS array `every` logic to property array values or operands array values. Example: `!operands.every(operand => /* ... */)`



