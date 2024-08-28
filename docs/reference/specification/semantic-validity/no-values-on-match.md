# No Values On Match

**Deprecated**

::: warning
As this check is also covered by min. length constraint
of the `valuesOnMatch` arrays of feature flag rules, this semantic issue
is redundant and will be removed at some point.
:::

This issue type is denoted by the type `SemanticIssueType.NO_VALUES_ON_MATCH`.

Such an issue is detected if a [feature flag rule's](../schema/feature-flag-rule/index.md) `valuesOnMatch`
array is empty.

For each feature flag rule that has an empty `valuesOnMatch` array, one issue of this type will be created.

## Issues Schema

```json
{
  "schemaVersion": 1,
  "featureFlags": [
    {
      "id": "y3ck69o1",
      "name": "ai-pilot",
      "description": "",
      "type": "boolean",
      "targeting": {
        "enabled": true,
        "rules": [
          {
            "enabled": true,
            "conditionSet": {
              "operator": "or",
              "conditions": [ /* ... */ ]
            },
            // Causes semantic issue ❌
            "valuesOnMatch": []
          }
        ]
      },
      "defaultValue": false
    }
  ],
  "segments": [ /* ... */ ],
  "evaluationContext": {
    "properties": [ /* ... */ ]
  }
}
```

## Correct Schema

```json
{
  "schemaVersion": 1,
  "featureFlags": [
    {
      "id": "y3ck69o1",
      "name": "ai-pilot",
      "description": "",
      "type": "boolean",
      "targeting": {
        "enabled": true,
        "rules": [
          {
            "enabled": true,
            "conditionSet": {
              "operator": "or",
              "conditions": [ /* ... */ ]
            },
            // Is not empty ✅
            "valuesOnMatch": [
              {
                "value": true,
                "rolloutPercentage": 100
              }
            ]
          }
        ]
      },
      "defaultValue": false
    }
  ],
  "segments": [ /* ... */ ],
  "evaluationContext": {
    "properties": [ /* ... */ ]
  }
}
```

