# Evaluation

The client offers evaluating single feature flags based on feature flag names
or evaluating all feature flags at once.

Please also read about the [Evaluation Context](#evaluation-context) and
the [Emergency mode](#emergency-mode).

## Single feature flag evaluation

When calling one of the "single feature flag" evaluation functions, the client
ensures to return a value with the correct data type.

### Boolean

To evaluate a feature flag that is defined as a `boolean` feature flag
in the Loli specification, use `evaluateBooleanFeatureFlag`.
You need to pass the name of the feature flag and the evaluation
context data. The function returns a promise/is async that resolves with
the evaluation result.

```ts
const evaluationContext : EvaluationContext = { /*...*/ }

const booleanValue = await client.evaluateBooleanFeatureFlag(
    "boolean-feature-flag-name",
    evaluationContext
);
```

### Number

To evaluate a feature flag that is defined as a `number` feature flag
in the Loli specification, use `evaluateNumberFeatureFlag`.
You need to pass the name of the feature flag and the evaluation
context data. The function returns a promise/is async that resolves with
the evaluation result.

```ts
const evaluationContext : EvaluationContext = { /*...*/ }

const numberValue = await client.evaluateNumberFeatureFlag(
    "number-feature-flag-name",
    evaluationContext
);
```

### String

To evaluate a feature flag that is defined as a `string` feature flag
in the Loli specification, use `evaluateStringFeatureFlag`.
You need to pass the name of the feature flag and the evaluation
context data. The function returns a promise/is async that resolves with
the evaluation result.

```ts
const evaluationContext : EvaluationContext = { /*...*/ }

const stringValue = await client.evaluateStringFeatureFlag(
    "string-feature-flag-name",
    evaluationContext
);
```

## All feature flags evaluation

If you want to evaluate all feature flags, use `evaluateAllFeatureFlags`.
You only need to pass the evaluation context data. The function returns a
promise/is async that resolves with an object mapping feature flag names
to feature flag values.

```ts
const evaluationContext : EvaluationContext = { /*...*/ }

const allFeatureFlagValues = await client.evaluateAllFeatureFlags(
    evaluationContext
);

console.log("Boolean feature flag =", allFeatureFlagValues['boolean-feature-flag-name']);
console.log("Number feature flag =", allFeatureFlagValues['number-feature-flag-name']);
console.log("String feature flag =", allFeatureFlagValues['string-feature-flag-name']);
```

## Evaluation context

The "evaluation context" is the data the SDK uses to evaluate property conditions that are
used by feature flags and segments.

It has to be an object that can contain anything – but ideally carries all the data 
that has been defined in the Loli specification as "properties".

Data can be structured in a flat object:

```ts
const evaluationContext : EvaluationContext = {
    id: "8as65d876as5d",
    email: "test@test.com",
    appearance: "dark-mode",
    notifactions: "all"
}
```

But you can also pass a nested object or use arrays:

```ts
const evaluationContext : EvaluationContext = {
    id: "8as65d876as5d",
    email: "test@test.com",
    settings: {
        appearance: "dark-mode",
        notifactions: "all",
        activatedFeatures: ["ai-pilot", "8bit-mode"]
    }
}
```

## Emergency mode

The client can act in an "emergency mode" and feature flag evaluations
will return emergency fallback values.

These are defined by via the client's [options](./options.md).

The client returns emergency fallback values in the following cases:
- The spec loader never succeeded.
- The spec loader did not return a valid Loli specification.
- The client could not find a feature flag definition in the loaded specification for a given feature flag name (single feature flag evaluation).
- The data type of a feature flag defined in the specification various from the evaluation function signature (single feature flag evaluation).
