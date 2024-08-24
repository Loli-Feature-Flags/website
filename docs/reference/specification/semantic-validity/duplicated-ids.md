# Duplicated IDs

This issue type is denoted by the type `SemanticIssueType.DUPLICATED_ID`.

Such an issue is present, if one or more entities of a Loli specification have the same `id` attribute.

For every entity that has an `id` that is duplicated/shared a single semantic issue of this type
is created. That means, in case there are three entities with the same ID, three semantic issues
will be detected.

## Issues Schema

```json
{
  "schemaVersion": 1,
  "featureFlags": [
    {
      // Causes semantic issue ❌
      "id": "y3ck69o1",
      "name": "ai-pilot",
      "description": "",
      "type": "boolean",
      "targeting": {
        "enabled": true,
        "rules": [ /* ... */  ]
      },
      "defaultValue": false
    }
  ],
  "segments": [
    {
      // Causes semantic issue ❌
      "id": "y3ck69o1",
      "name": "beta-testers",
      "conditionSet": {
        "operator": "and",
        "conditions": [ /* ... */  ]
      }
    }
  ],
  "evaluationContext": {
    "properties": [
      {
        // Causes semantic issue ❌
        "id": "y3ck69o1",
        "path": ["email"],
        "name": "User E-Email",
        "type": "string",
        "rolloutDiscriminator": true
      },
      {
        // Causes semantic issue ❌
        "id": "y3ck69o1",
        "path": ["settingsFlags"],
        "name": "User Settings Flags",
        "type": "stringArray",
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
  "featureFlags": [
    {
      // Unique ID ✅
      "id": "y3ck69o1",
      "name": "ai-pilot",
      "description": "",
      "type": "boolean",
      "targeting": {
        "enabled": true,
        "rules": [ /* ... */  ]
      },
      "defaultValue": false
    }
  ],
  "segments": [
    {
      // Unique ID ✅
      "id": "vhfepz7m",
      "name": "beta-testers",
      "conditionSet": {
        "operator": "and",
        "conditions": [ /* ... */ ]
      }
    }
  ],
  "evaluationContext": {
    "properties": [
      {
        // Unique ID ✅
        "id": "jbds89t6",
        "path": ["email"],
        "name": "User E-Email",
        "type": "string",
        "rolloutDiscriminator": true
      },
      {
        // Unique ID ✅
        "id": "gd7y1edz",
        "path": ["settingsFlags"],
        "name": "User Settings Flags",
        "type": "stringArray",
        "rolloutDiscriminator": false
      }
    ]
  }
}
```
