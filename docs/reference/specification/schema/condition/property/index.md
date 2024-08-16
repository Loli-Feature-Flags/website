# Property Conditions

Property conditions evaluate the values of evaluation context properties.
They evaluate values based on various quantifiers, operators, and operands.

For more information, see [Property](../../property.md) and [Evaluation Context](../../evaluation-context.md).

They all share one attribute, `propertyId`. The "base" schema looks like this:

## Schema

```json
{
  "propertyId": "8765asd4as",

  // subtype specific attributes ...
}
```

## Attributes

### propertyId

- Type: `string`
- Required

This is the ID of the [Property](../../property.md) of which the value shall
be extracted from the evaluation context passed to the evaluation functions during runtime.

The extracted value is then evaluated based on quantifiers, operators, and operands that are
specific to the subtypes.

## Subtypes

Singe value property conditions:
- [String Property Condition](./string.md)
- [Number Property Condition](./number.md)
- [Boolean Property Condition](./boolean.md)

Array property conditions:
- [String Array Property Condition](./string-array.md)
- [Number Array Property Condition](./number-array.md)
- [Boolean Array Property Condition](./boolean-array.md)
