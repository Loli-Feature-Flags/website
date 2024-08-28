# Cyclic Dependencies Present

This issue type is denoted by the type `SemanticIssueType.CYCLIC_DEPENDENCIES_PRESENT`.

Such an issue is detected whenever a schema entity references another entity that is directly part of/causing
a cyclic dependency.

An example:
- (a) Feature flag `F1` references segment `S1`. **(contains a cyclic dependency)**
- (b) Segment `S1` references segment `S2`.
- (c) Segment `S2` references segment `S1`. (back to (b), cyclic dependency)

The difference to the semantic issue [Entity Part Of Cyclic Dependency](./entity-part-of-cyclic-dependency.md) is
that an entity an issue of type `SemanticIssueType.CYCLIC_DEPENDENCIES_PRESENT` is created for does
not directly cause the cyclic dependencies, but only "contains" one.

## Issues Example

This is the same example shown as in [Entity Part Of Cyclic Dependency](./entity-part-of-cyclic-dependency.md#issues-example),
but here only the issue type `SemanticIssueType.CYCLIC_DEPENDENCIES_PRESENT` is highlighted in the schema.

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
                  // Causes semantic issue, because the
                  // referenced segment is part of a
                  // cyclic dependency. Thus, a cyclic
                  // dependency is present. ❌
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
