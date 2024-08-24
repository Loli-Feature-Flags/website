# Semantic Validity

The SDK also offers function to validate a Loli specification semantically. What does this mean?

Semantic validation is a step performed after validating the schema. It asserts that the content
itself makes sense.

Let's look at a very simple Loli specification. Although the following specification has
a valid schema as per the [schema definition](../schema/index.md), **but it has one semantic issue**.
**The two feature flags have the exact same name `ai-pilot`.** 

That does not make sense, and would cause issues during the evaluation.

```json
{
  "schemaVersion": 1,
  "featureFlags": [
    {
      "id": "dfg4d756fg4",
      "name": "ai-pilot",
      "description": "",
      /* ... */
    },
    {
      "id": "y3ck69o1",
      "name": "ai-pilot",
      "description": "",
      /* ... */
    }
  ],
  /* ... */
}
```

The SDK offers functions to detect any semantic issues. Especially the [Evaluation Client](../../sdk/client/index.md)
emphasizes schema **and** semantic validation to only operate on 100% correct Loli specifications.

::: info
The overall goal is to know that a certain specification is valid so that the evaluation logic can
safely operate and make certain assumptions based on the validation constraints.
:::

## Semantic Issues

The SDK exposes the enum `SemanticIssueType` that lists all semantic issue types. When the SDK
finds semantic issues, they are exposed as instances of `SemanticIssue`.

Here, all semantic issues that the SDK checks for with their corresponding docs:
- [Duplicated IDs](./duplicated-ids.md)
- [Duplicated Feature Flag Name](./duplicated-feature-flag-name.md)
- [Duplicated Property Path](./duplicated-property-path.md)
- [Condition And Property Data Type Mismatch](./condition-property-data-type-mismatch.md)
- [Non-Existing Property Referenced](./non-existing-property-referenced.md)
- [Non-Existing Segment Referenced](./non-existing-segment-referenced.md)
- [No Values On Match](./no-values-on-match.md)
- [Rollout Percentage Sum Not 100%](./rollout-percentage-sum-not-one-hundred.md)
- [Cyclic Dependencies Present](./cyclic-dependencies-present.md)
- [Entity Is Part Of Cyclic Dependency](./entity-part-of-cyclic-dependency.md)
