# Non-Existing Property Referenced

This issue type is denoted by the type `SemanticIssueType.NON_EXISTING_PROPERTY_REFERENCED`.

Such an issue is detected if a [property condition](../schema/condition/property/index.md) references
a property (by ID) that does not exist in the Loli specification.

For every single property condition that references an unknown property, een issue of this
type will be created.

## Issues Schema

```json
{
  "schemaVersion": 1,
  "featureFlags": [ /* ... */ ],
  "segments": [
    {
      "id": "vhfepz7m",
      "name": "beta-testers",
      "conditionSet": {
        "operator": "and",
        "conditions": [
          {
            "type": "stringArray",
            // Causes semantic issue ❌
            "propertyId": "gd7y1edz",
            "propertyArrayQuantifier": "some",
            "operator": "equals",
            "operandsQuantifier": "some",
            "operands": ["betaTester"]
          }
        ]
      }
    }
  ],
  "evaluationContext": {
    "properties": [
      {
        "id": "muruiu60",
        "path": ["subscriptionPlanId"],
        "name": "User Subscription Plan ID",
        "type": "string",
        "rolloutDiscriminator": false
      }
    ]
  }
}
```

## Correct Schema

```json
{
  "schemaVersion": 1,
  "featureFlags": [ /* ... */ ],
  "segments": [
    {
      "id": "vhfepz7m",
      "name": "beta-testers",
      "conditionSet": {
        "operator": "and",
        "conditions": [
          {
            "type": "stringArray",
            // References an existing property ✅
            "propertyId": "gd7y1edz",
            "propertyArrayQuantifier": "some",
            "operator": "equals",
            "operandsQuantifier": "some",
            "operands": ["betaTester"]
          }
        ]
      }
    }
  ],
  "evaluationContext": {
    "properties": [
      {
        "id": "gd7y1edz",
        "path": ["settingsFlags"],
        "name": "User Settings Flags",
        "type": "stringArray",
        "rolloutDiscriminator": false
      },
      {
        "id": "muruiu60",
        "path": ["subscriptionPlanId"],
        "name": "User Subscription Plan ID",
        "type": "string",
        "rolloutDiscriminator": false
      }
    ]
  }
}
```

