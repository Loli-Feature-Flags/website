# Number Property Condition

A number property condition is meant to evaluate a [Property](../../property.md)
of type `number` – so a single number value.

## Schema

```json
{
  "propertyId": "wqe756q6we4",
  
  // Type specific attributes
  "type": "number",
  "operator": "isGreaterThan",
  "operandsQuantifier": "some",
  "operands": [42]
}
```

## Attributes

### type

- Type: `"number"`
- Required

Denotes the condition object as a number property condition.

### operator

- Type: [`NumberConditionOperators`](#numberconditionoperator)
- Required

The operator to use when comparing an operand of the `operands` array against the property value.

### operandsQuantifier

- Type: [`Quantifier`](#quantifier)
- Required

Tells the system how many operands of the `operands` array the property value has to match against.

### operands

- Type: `number[]`
- Required

The operands/values to compare the property value against based on the `operator` and `operandsQuantifier`.

## Utility Types

### NumberConditionOperator

Type: `"equals" | "doesNotEqual" | "isLessThan" | "isLessThanEquals" | "isGreaterThan" | "isGreaterThanEquals" | "isOdd" | "isEven"`

Operators and what they do:
- `"equals"`: Checks if property value equals an operand based on strict equality (JS `===`).
- `"doesNotEqual"`: Negation of `"equals"`.
- `"isLessThan"`: Checks if the property value is less than an operand (JS `value < operand`).
- `"isLessThanEquals"`: Checks if the property value is less than or equals an operand (JS `value <= operand`).
- `"isGreaterThan"`: Checks if the property value is greater than an operand (JS `value > operand`).
- `"isGreaterThanEquals"`: Checks if the property value is greater than or equals an operand (JS `value >= operand`).
- `"isOdd"`: Checks if the property value is an odd number (JS `value % 2 === 1`).
- `"isEven"`: Checks if the property value is an even number (JS `value % 2 === 0`).

### Quantifier

Type: `"some" | "every" | "notAny" | "notEvery"`

Quantifiers and what they do:
- `"some"`: Applies JS array `some` logic to property array values or operands array values. Example: `operands.some(operand => /* ... */)`
- `"every"`: Applies JS array `every` logic to property array values or operands array values. Example: `operands.every(operand => /* ... */)`
- `"notAny"`: Applies negation to JS array `some` logic to property array values or operands array values. Example: `!operands.some(operand => /* ... */)`
- `"notEvery"`: Applies negation to JS array `every` logic to property array values or operands array values. Example: `!operands.every(operand => /* ... */)`

