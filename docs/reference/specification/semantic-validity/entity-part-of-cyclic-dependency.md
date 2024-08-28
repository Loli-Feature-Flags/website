# Entity Is Part Of Cyclic Dependency

This issue type is denoted by the type `SemanticIssueType.PART_OF_CYCLIC_DEPENDENCY`.

Such an issue is detected whenever a schema entity is directly involved in/part of/causing
a cyclic dependency within the schema.

An example:
- (a) Feature flag `F1` references segment `S1`.
- (b) Segment `S1` references segment `S2`. **(causes a cyclic dependency)**
- (c) Segment `S2` references segment `S1`. (back to (b), cyclic dependency) **(causes a cyclic dependency)**

The difference to the semantic issue [Cyclic Dependencies Present](./entity-part-of-cyclic-dependency.md) is
that an entity that an issue of type `SemanticIssueType.PART_OF_CYCLIC_DEPENDENCY` is created for actively
causes the cyclic dependency/is part of it.

## Issues Example

This is the same example shown as in [Cyclic Dependencies Present](./cyclic-dependencies-present.md#issues-example),
but here only the issue type `SemanticIssueType.PART_OF_CYCLIC_DEPENDENCY` is highlighted in the schema.

```json
{
  "schemaVersion": 1,
  "featureFlags": [
    {
      "id": "np1notuu",
      "name": "dark-mode",
      "description": "",
      "type": "boolean",
      "targeting": {
        "enabled": true,
        "rules": [
          {
            "enabled": true,
            "conditionSet": {
              "operator": "and",
              "conditions": [
                {
                  "type": "segment",
                  "segmentId": "vhfepz7m",
                  "operator": "isTrue"
                }
              ]
            },
            "valuesOnMatch": [ /* ... */ ]
          }
        ]
      },
      "defaultValue": false
    }
  ],
  "segments": [
    {
      "id": "vhfepz7m",
      "name": "beta-testers",
      "conditionSet": {
        "operator": "and",
        "conditions": [
          {
            "type": "segment",
            // Causes semantic issue, as this segment
            // is directly part of a cyclic dependency. ❌
            "segmentId": "aknd4fpn",
            "operator": "isTrue"
          }
        ]
      }
    },
    {
      "id": "aknd4fpn",
      "name": "internal-users",
      "conditionSet": {
        "operator": "and",
        "conditions": [
          {
            "type": "segment",
            // Causes semantic issue, as this segment
            // is directly part of a cyclic dependency. ❌
            "segmentId": "vhfepz7m",
            "operator": "isTrue"
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
