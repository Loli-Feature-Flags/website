# String Property Condition

A string property condition is meant to evaluate a [Property](../../property.md)
of type `string` – so a single string value.

## Schema

```json
{
  "propertyId": "8765asd4as",
  
  // Type specific attributes
  "type": "string",
  "operator": "endsWith",
  "operandsQuantifier": "some",
  "operands": ["@acme.com", "@internal.acme.com"]
}
```

## Attributes

### type

- Type: `"string"`
- Required

Denotes the condition object as a string property condition.

### operator

- Type: [`StringConditionOperators`](#stringconditionoperator)
- Required

The operator to use when comparing an operand of the `operands` array against the property value.

### operandsQuantifier

- Type: [`Quantifier`](#quantifier)
- Required

Tells the system how many operands of the `operands` array the property value has to match against.

### operands

- Type: `string[]`
- Required

The operands/values to compare the property value against based on the `operator` and `operandsQuantifier`.

## Utility Types

### StringConditionOperator

Type: `"equals"  | "doesNotEqual"  | "startsWith"  | "doesNotStartWith"  | "endsWith"  | "doesNotEndWith"  | "isBlank"  | "isNotBlank"  | "matchesRegex"  | "doesNotMatchRegex"`

Operators and what they do:
- `"equals"`: Checks if property value equals an operand based on strict equality (JS `===`).
- `"doesNotEqual"`: Negation of `"equals"`.
- `"startsWith"`: Checks if the property value starts with an operand (JS `value.startsWith(operand)`).
- `"doesNotStartWith"`: Negation of `"startsWith"`.
- `"endsWith"`: Checks if the property value ends with an operand (JS `value.endsWith(operand)`). 
- `"doesNotEndWith"`: Negation of `"endsWith"`.
- `"isBlank"`: Checks if the trimmed property value has a length of 0 (JS `value.trim().length === 0`).
- `"isNotBlank"`: Negation of `"isBlank"`.
- `"matchesRegex"`: Checks if the property value matches a regex denoted by an operand (JS `new RegExp  (operand).test(value)`).
- `"doesNotMatchRegex"`: Negation of `"matchesRegex"`.

### Quantifier

Type: `"some" | "every" | "notAny" | "notEvery"`

Quantifiers and what they do:
- `"some"`: Applies JS array `some` logic to property array values or operands array values. Example: `operands.some(operand => /* ... */)`
- `"every"`: Applies JS array `every` logic to property array values or operands array values. Example: `operands.every(operand => /* ... */)`
- `"notAny"`: Applies negation to JS array `some` logic to property array values or operands array values. Example: `!operands.some(operand => /* ... */)`
- `"notEvery"`: Applies negation to JS array `every` logic to property array values or operands array values. Example: `!operands.every(operand => /* ... */)`

