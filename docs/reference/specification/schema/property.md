# Property

A property represents a value that is passed to the SDK as part
of the evaluation context. A property can be used in conditions
to target, for example, specific users based on their attributes.

The schema of a property looks like that:

## Schema

```json
{
  "id": "8asd675ws",
  "type": "string",
  "name": "User E-Mail",
  "path": ["user", "email"],
  "rolloutDiscriminator": false
}
```

## Attributes

### id

- Type: `string`
- Required

An ID that is unique across all Loli spec entities. The ID
is used only within the Loli spec.

### type

- Type: `"string" | "number" | "boolean" | "stringArray" | "numberArray" | "booleanArray"`
- Required

The type denotes the data type of this property. This ensures a more type safe specification.
The type information is also used during evaluation to evaluate conditions properly.

The evaluation context should always contain the property with the correct data type.

Conditions checking for a property that is not present in the evaluation context will also
evaluate to `false`.

Conditions checking for a property of a certain data type will also always evaluate to false,
if the evaluation context holds a property value of the wrong data type.

### name

- Type: `string`
- Required

Human-readable name of this property. Only used to display the property correctly visually like
in Loli UI.

### path

- Type: `string[]`
- Required

This array denotes where the property value is/needs to be located in an evaluation context object.
Each element of this array must have a length of at least one character.

The array describes the order of keys to use to access (nested) property values of the evaluation context object.

Here is an example:
```ts
const evaluationContext = {
    email: "test@acme.com",
    company: {
        planId: "...",
    },
    betaFeatures: ["darkMode", "..."]
}

// Path = ["email"]
//  > evaluationContext.email

// Path = ["company", "planId"]
//  > evaluationContext.company?.planId

// Path = ["betaFeatures", "0"]
//  > evaluationContext.betaFeatures?.[0]
```

### rolloutDiscriminator

- Type: `boolean`
- Required

This flag denotes if the property is a so-called "rollout discriminator" property.

Rollout discriminator properties are required to properly perform percentage based/gradual rollouts.

A property that is flagged as a rollout discriminator is used to compute a pseudo-random, but deterministic
number between 0 and 100. This number is then used to determine which value to apply.

This is necessary if a rule has more than value respectively has different percentages for the values.

See:
- [Boolean Feature Flag Rule – valuesOnMatch](./feature-flag-rule/boolean.md#valuesonmatch)
- [Number Feature Flag Rule – valuesOnMatch](./feature-flag-rule/number.md#valuesonmatch)
- [String Feature Flag Rule – valuesOnMatch](./feature-flag-rule/string.md#valuesonmatch)

::: warning
If a Loli specification does not have a single property with `rolloutDiscriminator = true`,
percentage based/gradual rollouts will not work correctly.

What happens is, always the first value of a rule's `valuesOnMatch` array will be picked.
:::
