# Evaluation Context

The evaluation context is a wrapper that (so far) only holds
the evaluation context properties.

For more details on properties, check out [Property](./property.md).

The schema of the evaluation context looks like this:

## Schema

```json
{
  "properties": []
}
```

## Attributes

### properties

- Type: Array of `Property`
- Required

An array of all known properties that can be used by segments and feature flags
via conditions as part of condition sets.

Check out [Property](./property.md).
