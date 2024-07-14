# Options

## `specLoaderTimeoutMilliseconds`

- Optional
- Type: `number`
- Default value: `15000` (15s)

The time in milliseconds the client waits for a call to the
spec loader to return. If this timeout duration is exceeded by
the spec loader, the client assumes the call to have failed with
a timeout. Depending on the configuration of the client, it
might perform a retry.

## `specLoaderMaxRetries`

- Optional
- Type: `number`
- Default value: `5`

If this option is > 0, the client performs retries if the
(initial) spec loader call fails or times out.
The max. number of spec loader calls is 1 + specLoaderMaxRetries.

## `specLoaderFailureRetryDelayMilliseconds`

- Optional
- Type: `number`
- Default value: `2500` (2.5s)

The time to wait between the last spec loader call attempt
and the next one (a retry) in milliseconds.

## `specCacheStaleTimeMilliseconds`

- Optional
- Type: `number`
- Default value: `15000` (15s)

This option controls after how much time in milliseconds
a successfully loaded and validated Loli specification
is seen as "stale".

Until a spec is stale, no automatic reload
is triggered by the client. When the cached spec is becomes/is seen
as stale, the client will automatically trigger a spec reload
on spec reads (e.g. evaluation calls).

## `specReloadMaxBlockingWaitMilliseconds`

- Optional
- Type: `number`
- Default value: `1500` (1.5s)

The time in milliseconds to wait for a spec reload if the cached
spec is stale.

If this is <= 0, all actions accessing the cached spec
will not be "blocked" by any reloads.

If this option is > 0, all actions accessing the cached and stale spec
will wait for up to "specReloadMaxBlockingWaitMilliseconds". If the spec
loader returned within that time, the actions will already use
the newly fetched spec, otherwise they will continue to use the stale spec.

The reload is not affected by that in any way and will finish either way.

## `disableInitialSpecLoadOnCreation`

- Optional
- Type: `boolean`
- Default value: `false`

By default, a LoliClient call the spec loader during the instance
initialization. If you don't want this and instead want the client
to first load the spec on the first evaluation call, you can set
this option to true.

## `emergencyFallbacksByFeatureFlagName`

- Optional
- Type: `LoliClientAllFeatureFlagsEvaluationResult`
- Default value: `{}` (empty object)

In case the client is running in emergency mode (no spec available),
evaluation actions will first try to return an emergency fallback value
based on the feature flag name. Via this option you can define emergency
fallback values by feature flag name.

This is relevant for an "all feature flags" evaluation and single/per-data-type
evaluation calls.

## emergencyFallbacksByDataType``

- Optional
- Type: `LoliClientEvaluationEmergencyFallbacks`
- Default value: `{ boolean: false, number: 0, string: "" }`

In case the client is running in emergency mode (no spec available),
single feature flag evaluation actions will first try to return an emergency
fallback value by the feature flag name and the option
"emergencyFallbacksByFeatureFlagName".

If no emergency fallback value is set by the name, this option comes into play.
The single feature flag evaluation actions will then return a fallback value based
on the expected output data type.

This option is not relevant for an "all feature flags" evaluation.

## `dataTypeMismatchBehavior`

- Optional
- Type: `string`
- Default value: `"emergency-fallback"`

This option controls what happens, when a single feature flag evaluation
is executed, but the data type of the feature flag specification does not match
the signature of the evaluation method.

Example: evaluateNumberFeatureFlag is called for a feature flag, which
has the output data type "boolean" in the loaded specification.

The value "emergency-fallback" returns the corresponding emergency fallback
value by data type based on the evaluation function signature
(see option "emergencyFallbacksByDataType").

The value "error" causes the client to instead throw an error. The evaluation
function will also return an error respectively return a rejected promise.

## `callbackBehavior`

- Optional
- Type: `string`
- Default value: `"non-blocking"`

This option defines how/when client callbacks are executed.

The value "non-blocking" causes all callbacks to be executed via
a setTimeout with a timeout duration of 0 milliseconds.

The value "blocking" causes all callbacks to be called directly/"in place"
surrounded by a try/catch to not break any client logic.

It is always guaranteed, that failing callbacks never break
any client logic.
