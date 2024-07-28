# Feature Flag

A feature flag has always a precise **output data type**. This means,
when you evaluate a feature flag you know the data type of the feature flag
evaluation value/output.

For each output data type exists a distinct feature flag type.

- `boolean`: [Boolean Feature Flag](./boolean)
- `number`: [Number Feature Flag](./number)
- `string`: [String Feature Flag](./string)

All feature flag types share some properties. These shared properties are
explained below.

```json
{
  "id": "8a6sd65as7",
  "name": "dark-mode",
  "description": "Enables dark mode for all paying customers.",
  
  // subtype specific attributes ...
}
```

## id

- Type: `string`
- Required

An ID that is unique across all Loli spec entities. The ID
is used only within the Loli spec. It is not used by the SDK
to specify which feature flag to evaluate.

## name

- Type: `string`
- Required
- Pattern: `/^[a-zA-Z0-9]+([-_][a-zA-Z0-9]+)*$/`

The name of the feature flag. It has to be unique across all feature flags of a Loli spec.

The name needs to be specified for a feature flag evaluation so the SDK knows
which feature flag(s) to evaluate. 

Must only contain letters and numbers separated by single dashes or underscores.

## description

- Type: `string`
- Required

An optional (optional = empty string) description that can be used
to attach contextual information about the feature flag.

## Subtypes

- [Boolean Feature Flag](./boolean)
- [Number Feature Flag](./number)
- [String Feature Flag](./string)
