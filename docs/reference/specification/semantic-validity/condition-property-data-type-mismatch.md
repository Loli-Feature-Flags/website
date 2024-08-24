# Condition And Property Data Type Mismatch

This issue type is denoted by the type `SemanticIssueType.CONDITION_PROPERTY_DATA_TYPE_MISMATCH`.

Such an issue is present if a [Property Condition](../schema/condition/property/index.md) references a
[Property](../schema/property.md) with the incorrect data type.

Property conditions are denoted by a `type` attribute. For example, if a string property condition
with `type = "string"` references a property that has `type = "number"`, then this issue type
is present.

For every single property condition that references a property of incorrect data type, one issue of this
type is detected.

## Issues Example

```json
{
  "schemaVersion": 1,
  "featureFlags": [ /* ... */ ],
  "segments": [
    {
      "id": "aknd4fpn",
      "name": "internal-users",
      "conditionSet": {
        "operator": "and",
        "conditions": [
          {
            // String property condition references number property ❌
            "type": "string",
            "propertyId": "l3458as6dsa",
            "operator": "endsWith",
            "operandsQuantifier": "some",
            "operands": ["@acme.com"]
          }
        ]
      }
    }
  ],
  "evaluationContext": {
    "properties": [
      {
        "id": "l3458as6dsa",
        "path": ["age"],
        "name": "User Age",
        "type": "number",
        "rolloutDiscriminator": false
      }
    ]
  }
}
```

## Correct Example

```json
{
  "schemaVersion": 1,
  "featureFlags": [ /* ... */ ],
  "segments": [
    {
      "id": "aknd4fpn",
      "name": "internal-users",
      "conditionSet": {
        "operator": "and",
        "conditions": [
          {
            // String property condition references string property ✅
            "type": "string",
            "propertyId": "jbds89t6",
            "operator": "endsWith",
            "operandsQuantifier": "some",
            "operands": ["@acme.com"]
          }
        ]
      }
    }
  ],
  "evaluationContext": {
    "properties": [
      {
        "id": "jbds89t6",
        "path": ["email"],
        "name": "User E-Email",
        "type": "string",
        "rolloutDiscriminator": true
      }
    ]
  }
}
```
