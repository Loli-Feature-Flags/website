# Number Array Property Condition

A number array property condition is meant to evaluate a [Property](../../property.md)
of type `numberArray` – so an array of number values.

## Schema

```json
{
  "propertyId": "h9dsf7sdf55",
  
  // Type specific attributes
  "type": "numberArray",
  "propertyArrayQuantifier": "every",
  "operator": "isGreaterThanEquals",
  "operandsQuantifier": "some",
  "operands": [1024]
}
```

## Attributes

### type

- Type: `"numberArray"`
- Required

Denotes the condition object as a number array property condition.

### propertyArrayQuantifier

- Type: [`Quantifier`](#quantifier)
- Required

Tells the system how many of the property array values need to evaluate to true based on
the `operator`, `operandsQuantifier`, and `operands`.

### operator

- Type: [`NumberArrayConditionOperators`](#numberarrayconditionoperator)
- Required

The operator to use when comparing an operand of the `operands` array against one of the property array values.

### operandsQuantifier

- Type: [`Quantifier`](#quantifier)
- Required

Tells the system how many operands of the `operands` array one of the property array values has to match against.

### operands

- Type: `number[]`
- Required

The operands/values to compare a property array value against based on the `propertyArrayQuantifier`,
`operator` and `operandsQuantifier`.

## Utility Types

### NumberArrayConditionOperator

Type: `"equals" | "doesNotEqual" | "isLessThan" | "isLessThanEquals" | "isGreaterThan" | "isGreaterThanEquals" | "isOdd" | "isEven" | "hasElements" | "hasNoElements"`

Operators and what they do:
- `"equals"`: Checks if a property array value equals an operand based on strict equality (JS `===`).
- `"doesNotEqual"`: Negation of `"equals"`.
- `"isLessThan"`: Checks if a property array value is less than an operand (JS `value < operand`).
- `"isLessThanEquals"`: Checks if a property array value is less than or equals an operand (JS `value <= operand`).
- `"isGreaterThan"`: Checks if a property array value is greater than an operand (JS `value > operand`).
- `"isGreaterThanEquals"`: Checks if a property array value is greater than or equals an operand (JS `value >= operand`).
- `"isOdd"`: Checks if a property array value is an odd number (JS `value % 2 === 1`).
- `"isEven"`: Checks if a property array value is an even number (JS `value % 2 === 0`).
- `"hasElements"`: Evaluates to `true`, if the property array has at least one element/value. Does not look at `propertyArrayQuantifier`, `operandsQuantifier`, and `operands`.
- `"hasNoElements"`: Evaluates to `true`, if the property array no elements/values. Does not look at `propertyArrayQuantifier`, `operandsQuantifier`, and `operands`.

### Quantifier

Type: `"some" | "every" | "notAny" | "notEvery"`

Quantifiers and what they do:
- `"some"`: Applies JS array `some` logic to property array values or operands array values. Example: `operands.some(operand => /* ... */)`
- `"every"`: Applies JS array `every` logic to property array values or operands array values. Example: `operands.every(operand => /* ... */)`
- `"notAny"`: Applies negation to JS array `some` logic to property array values or operands array values. Example: `!operands.some(operand => /* ... */)`
- `"notEvery"`: Applies negation to JS array `every` logic to property array values or operands array values. Example: `!operands.every(operand => /* ... */)`


