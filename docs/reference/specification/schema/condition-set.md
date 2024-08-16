# Condition Set

A condition set is a list of conditions. These conditions are evaluated and
combined by a logical operator denoted by the `operator` attribute.

## Schema

```json
{
  "operator": "and",
  "conditions": [ /* ... */ ]
}
```

## Attributes

### operator

- Type: `"and" | "or" | "nand" | "nor"`
- Required

The logical operator to use for "combining" the evaluation results of all
`conditions`. Depending on the operator and the evaluation results of the individual
conditions, either all or only some conditions are evaluated.

Technically, the different operators work like this:
```ts
const conditions = [ /* ... */ ]

// and
const andResult = 
    evalCondition(conditions[0]) &&
    evalCondition(conditions[1]) &&
    evalCondition(conditions[2]) && /* ... */ ;

// or
const orResult =
    evalCondition(conditions[0]) ||
    evalCondition(conditions[1]) ||
    evalCondition(conditions[2]) || /* ... */ ;
    
// nand (not and)
const nandResult = 
    !(
        evalCondition(conditions[0]) &&
        evalCondition(conditions[1]) &&
        evalCondition(conditions[2]) && /* ... */
    );

// nor (not or)
const norResult =
    !(
        evalCondition(conditions[0]) ||
        evalCondition(conditions[1]) ||
        evalCondition(conditions[2]) || /* ... */
    );
```


### conditions

- Type: `Condition[]`
- Required

This is an array holding all conditions that need/can be evaluated (depends on operator and
results of previous conditions).

Conditions are always evaluated in the order they have in this array.

For more details, read [Condition](./condition/index.md).
