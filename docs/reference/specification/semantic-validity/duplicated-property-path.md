# Duplicated Property Path

This issue type is denoted by the type `SemanticIssueType.DUPLICATED_PROPERTY_PATH`.

Such an issue is present, if one or more evaluation context property entities of a
Loli specification have the same `path` attribute (shallow equality).

For every property entity that has a `path` that is duplicated/shared a single semantic issue of this type
is created. That means, in case there are three properties with the same `path`, three semantic issues
will be detected.

## Issues Schema

```json
{
  "schemaVersion": 1,
  "featureFlags": [ /* ... */ ],
  "segments": [ /* ... */ ],
  "evaluationContext": {
    "properties": [
      {
        "id": "jbds89t6",
        // Causes semantic issue ❌
        "path": ["user", "email"],
        "name": "User E-Email",
        "type": "string",
        "rolloutDiscriminator": true
      },
      {
        "id": "gd7y1edz",
        // Causes semantic issue ❌
        "path": ["user", "email"],
        "name": "User Backup E-Mail",
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
  "segments": [ /* ... */ ],
  "evaluationContext": {
    "properties": [
      {
        "id": "jbds89t6",
        // Unique path ✅
        "path": ["user", "email"],
        "name": "User E-Email",
        "type": "string",
        "rolloutDiscriminator": true
      },
      {
        "id": "gd7y1edz",
        // Unique path ✅
        "path": ["user", "backupEmail"],
        "name": "User Backup E-Mail",
        "type": "string",
        "rolloutDiscriminator": false
      }
    ]
  }
}
```
