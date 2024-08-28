# Non-Existing Segment Referenced

This issue type is denoted by the type `SemanticIssueType.NON_EXISTING_SEGMENT_REFERENCED`.

Such an issue is detected if a [segment condition](../schema/condition/segment.md) references
a segment (by ID) that does not exist in the Loli specification.

For every single segment condition that references an unknown segment, one issue of this
type will be created.

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
              "conditions": [
                {
                  "type": "segment",
                  // Causes semantic issue ❌
                  "segmentId": "aknd4fpn",
                  "operator": "isTrue"
                }
              ]
            },
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
  "segments": [],
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
              "conditions": [
                {
                  "type": "segment",
                  // References existing segment ✅
                  "segmentId": "aknd4fpn",
                  "operator": "isTrue"
                }
              ]
            },
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
  "segments": [
    {
      "id": "aknd4fpn",
      "name": "internal-users",
      "conditionSet": {
        "operator": "and",
        "conditions": [
          {
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
    "properties": [ /* ... */ ]
  }
}
```

