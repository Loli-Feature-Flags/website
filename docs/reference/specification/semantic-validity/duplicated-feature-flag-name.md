# Duplicated Feature Flag Name

This issue type is denoted by the type `SemanticIssueType.DUPLICATED_FEATURE_FLAG_NAME`.

Such an issue is present, if one or more feature flag entities of a Loli specification
have the same `name` attribute.

For every feature flag entity that has a `name` that is duplicated/shared a single semantic issue of this type
is created. That means, in case there are three feature flags with the same `name`, three semantic issues
will be detected.

## Issues Schema

```json
{
  "schemaVersion": 1,
  "featureFlags": [
    {
      "id": "y3ck69o1",
      // Causes semantic issue ❌
      "name": "ai-pilot",
      "description": "",
      "type": "boolean",
      "targeting": {
        "enabled": true,
        "rules": [  /* ... */  ]
      },
      "defaultValue": false
    },
    {
      "id": "np1notuu",
      // Causes semantic issue ❌
      "name": "ai-pilot",
      "description": "",
      "type": "boolean",
      "targeting": {
        "enabled": true,
        "rules": [ /* ... */ ]
      },
      "defaultValue": false
    }
  ],
  "segments": [  /* ... */  ],
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
      // Unique name ✅
      "name": "ai-pilot",
      "description": "",
      "type": "boolean",
      "targeting": {
        "enabled": true,
        "rules": [  /* ... */  ]
      },
      "defaultValue": false
    },
    {
      "id": "np1notuu",
      // Unique name ✅
      "name": "dark-mode",
      "description": "",
      "type": "boolean",
      "targeting": {
        "enabled": true,
        "rules": [ /* ... */ ]
      },
      "defaultValue": false
    }
  ],
  "segments": [  /* ... */  ],
  "evaluationContext": {
    "properties": [ /* ... */ ]
  }
}
```
