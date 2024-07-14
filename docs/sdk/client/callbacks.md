# Callbacks

## `specLoaderFailure`

- Optional
- Parameters:
  - `message: string`
    - Failure message.
  - `cause?: unknown`
    - Optional cause.

This callback is executed when the spec loader throws an error/returns
with a rejected promise.

## `specValidationFailure`

- Optional
- Parameters:
    - `message: string`
      - Failure message.
    - `specLoaderResult: unknown`
      - specLoaderResult Result of the spec loader that was invalid JSON or a spec with an invalid schema or semantic issues.
    - `cause?: unknown`
      - Optional cause.

This callback is executed after the spec loader successfully returned
something, but the result is invalid JSON or a Loli specification with
an invalid schema or with semantic issues.

## `specLoadedAndValidated`

- Optional
- Parameters:
    - `loadedSpec: LoliSpec`
      - Loaded and validated LoliSpec.

This callback is executed when a spec loader successfully returned a result
and the result was a valid Loli specification.

The callback can be used to e.g. put the loaded and validated Loli specification
in a distributed cache.

## `emergencyFallbackUsed`

- Optional
- Parameters:
  - `message: string`
    - Message that contains information about the use of an emergency fallback.
  - `cause?: unknown`
    - Optional cause.

This callback is executed whenever the client acts in emergency mode
and has to make use of an emergency fallback (see options
"emergencyFallbacksByFeatureFlagName" and "emergencyFallbacksByDataType").

## `evaluationWarning`

- Optional
- Type: `EvaluationWarningLogger`
- Parameters:
  - `type: EvaluationWarningType`
    - Type of the evaluation warning.
  - `message: string`
    - Descriptive message of the evaluation warning.

This callback is executed whenever any of the SDKs evaluation functions
(e.g. to evaluate feature flags, segments, conditions, etc.) detect
a runtime problem (like a data type mismatch between an evaluation context
property and the defined data type of that property in the Loli specification).
