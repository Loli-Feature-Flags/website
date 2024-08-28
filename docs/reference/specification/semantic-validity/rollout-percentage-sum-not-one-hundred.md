# Rollout Percentage Sum Not 100%

This issue type is denoted by the type `SemanticIssueType.ROLLOUT_PERCENTAGE_SUM_NOT_ONE_HUNDRED`.

Such an issue is detected if a [feature flag rule's](../schema/feature-flag-rule/index.md) `valuesOnMatch`
array/its values have in total a rollout percentage sum that is not exactly 100%.

Together, all values always must have a rollout percentage sum of 100%.

For each feature flag rule that has `valuesOnMatch` array with an incorrect rollout percentage sum,
one issue of this type will be created.

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
            "valuesOnMatch": [
              {
                "value": true,
                "rolloutPercentage": 50
              },
              {
                "value": false,
                "rolloutPercentage": 25
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
            // Rollout percentage sum is 100% ✅
            "valuesOnMatch": [
              {
                "value": true,
                "rolloutPercentage": 50
              },
              {
                "value": false,
                "rolloutPercentage": 50
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

