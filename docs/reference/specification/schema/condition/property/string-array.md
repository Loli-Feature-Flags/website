# String Array Property Condition

A string array property condition is meant to evaluate a [Property](../../property.md)
of type `stringArray` – so an array of string values.

## Schema

```json
{
  "propertyId": "23jfsaa6ads",
  
  // Type specific attributes
  "type": "stringArray",
  "propertyArrayQuantifier": "some",
  "operator": "endsWith",
  "operandsQuantifier": "some",
  "operands": ["@acme.com", "@internal.acme.com"]
}
```

## Attributes

### type

- Type: `"stringArray"`
- Required

Denotes the condition object as a string array property condition.

### propertyArrayQuantifier

- Type: [`Quantifier`](#quantifier)
- Required

Tells the system how many of the property array values need to evaluate to true based on
the `operator`, `operandsQuantifier`, and `operands`.

### operator

- Type: [`StringArrayConditionOperators`](#stringarrayconditionoperator)
- Required

The operator to use when comparing an operand of the `operands` array against one of the property array values.

### operandsQuantifier

- Type: [`Quantifier`](#quantifier)
- Required

Tells the system how many operands of the `operands` array one of the property array values has to match against.

### operands

- Type: `string[]`
- Required

The operands/values to compare a property array value against based on the `propertyArrayQuantifier`,
`operator` and `operandsQuantifier`.

## Utility Types

### StringArrayConditionOperator

Type: `"equals"  | "doesNotEqual"  | "startsWith"  | "doesNotStartWith"  | "endsWith"  | "doesNotEndWith"  | "isBlank"  | "isNotBlank"  | "matchesRegex"  | "doesNotMatchRegex" | "hasElements" | "hasNoElements"`

Operators and what they do:
- `"equals"`: Checks if a property array value equals an operand based on strict equality (JS `===`).
- `"doesNotEqual"`: Negation of `"equals"`.
- `"startsWith"`: Checks if a property array value starts with an operand (JS `value.startsWith(operand)`).
- `"doesNotStartWith"`: Negation of `"startsWith"`.
- `"endsWith"`: Checks if a property array value ends with an operand (JS `value.endsWith(operand)`).
- `"doesNotEndWith"`: Negation of `"endsWith"`.
- `"isBlank"`: Checks if a trimmed property array value has a length of 0 (JS `value.trim().length === 0`).
- `"isNotBlank"`: Negation of `"isBlank"`.
- `"matchesRegex"`: Checks if a property array value matches a regex denoted by an operand (JS `new RegExp  (operand).test(value)`).
- `"doesNotMatchRegex"`: Negation of `"matchesRegex"`.
- `"hasElements"`: Evaluates to `true`, if the property array has at least one element/value. Does not look at `propertyArrayQuantifier`, `operandsQuantifier`, and `operands`.
- `"hasNoElements"`: Evaluates to `true`, if the property array no elements/values. Does not look at `propertyArrayQuantifier`, `operandsQuantifier`, and `operands`.

### Quantifier

Type: `"some" | "every" | "notAny" | "notEvery"`

Quantifiers and what they do:
- `"some"`: Applies JS array `some` logic to property array values or operands array values. Example: `operands.some(operand => /* ... */)`
- `"every"`: Applies JS array `every` logic to property array values or operands array values. Example: `operands.every(operand => /* ... */)`
- `"notAny"`: Applies negation to JS array `some` logic to property array values or operands array values. Example: `!operands.some(operand => /* ... */)`
- `"notEvery"`: Applies negation to JS array `every` logic to property array values or operands array values. Example: `!operands.every(operand => /* ... */)`

