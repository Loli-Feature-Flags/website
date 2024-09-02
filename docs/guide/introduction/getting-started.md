# Getting Started

We will guide through the basic steps you have to do to set up Loli Feature Flags and integrate
it into your tech stack.

::: warning
Right now, this setup requires some technical full-stack knowledge
as you will have to touch data storages/databases, backend services
and frontend apps.
:::

::: info
In the future, Loli will provide templates repos, and probably convenience
packages such as data storage adapters.
:::

## Table Of Contents

[[toc]]

## General

The setup involves the following parts:
- Configure data storage to store specification (versions).
- Create API endpoint to store/update specification (changes).
- Integrate Loli UI to manage specification.
- Create API endpoint to get evaluated feature flags.
- Consumes evaluated feature flags in frontend.

::: info
In the following sections we will provide some code examples
for Postgres, Mongo, and Node.js with Express.
:::

## Data Storage

First, you need to set up a data storage where you can store the Loli [Specification](./terminology.md#specification).
This specification will hold all your configured feature flags, segments, and evaluation context properties.

We will provide some examples for Postgres and MongoDB.

### Basics

#### Postgres

If you are using a relational database, you may create a new database table like so (Postgres example):
```sql
CREATE TABLE loli_feature_flags_specification (
    id SERIAL PRIMARY KEY,
    specification JSONB NOT NULL
);
```

#### MongoDB

If you are using MongoDB, you can simply create a new collection:
```ts
db.createCollection("loli_feature_flags_specification");
```
You can of course also add a `validator`.

### Versioning

To support versioning, you may extend your schema by a timestamp. Also, <u>add an index
for the `createdAt` column</u> to ensure fast queries.

#### Postgres

For Postgres, this could look like follows:
```sql
ALTER TABLE loli_feature_flags_specification
ADD COLUMN createdAt TIMESTAMPTZ DEFAULT NOW();

CREATE INDEX idx_loli_feature_flags_specification_createdAt
ON loli_feature_flags_specification (createdAt);
```

#### MongoDB

For MongoDB, you should add a <u>descending</u> index for `createdAt`.
```ts
db.loli_feature_flags_specification.createIndex({ createdAt: -1 });
```
If you have a validator, you should extend it as well.

### Auditing

#### Postgres

Ideally, you also store who created a version. If you already have a users table/collection, just add
a reference to the user that created the version.

For Postgres, it can look like this:
```sql
ALTER TABLE loli_feature_flags_specification
ADD COLUMN userId INT,
ADD CONSTRAINT fk_userId FOREIGN KEY (userId) REFERENCES "user"(id);
```

#### MongoDB

For Mongo, you can decide if you need an index for the user ID or not. 
```ts
db.loli_feature_flags_specification.createIndex({ userId: -1 });
```
If you have a validator, you should extend it as well.

## Backend

### API Endpoint To Update Specification

#### Postgres

You will need an endpoint to receive new specification data from your integrated Loli UI to store
them in your data storage.

For Express and Postgres this may look like follows:
```ts
import { deserializeLoliSpecFromJson } from "@loli-feature-flags/loli-sdk";

app.use(express.text());

app.post("/loli-feature-flags/specification", async (req, res) => {
    try {
        const rawBody = req.body;
        
        // Parses stringified JSON, validates schema and semantic validity.
        const validatedLoliSpecification = deserializeLoliSpecFromJson(rawBody);
        
        // Insert new specification version.
        const query = `
            INSERT INTO loli_feature_flags_specification (specification, userId, createdAt)
            VALUES ($1::jsonb, $2, NOW())
            RETURNING id;
        `;
        
        const values = [validatedLoliSpecification, req.user.id];
        const result = await postgresPool.query(query, values);
        
        // Return ID of newly created version.
        res.status(201).json({ id: result.rows[0].id });
    } catch (error) {
        console.error('Error inserting specification:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
```

#### MongoDB

For MongoDB, it may look like follows:
```ts
import { deserializeLoliSpecFromJson } from "@loli-feature-flags/loli-sdk";

app.post("/loli-feature-flags/specification", async (req, res) => {
    try {
        const rawBody = req.body;

        // Parses stringified JSON, validates schema and semantic validity.
        const validatedLoliSpecification = deserializeLoliSpecFromJson(rawBody);

        // Insert new specification version.
        const document = {
            userId: req.user.id,
            specification: validatedLoliSpecification,
            createdAt: new Date()
        };
        
        const result = await db.loli_feature_flag_specification.insertOne(document);

        // Return ID of newly created version.
        res.status(201).json({ id: result.insertedId });
    } catch (error) {
        console.error('Error storing loli feature flag specification:', error);
        res.status(500).json({ message: 'Failed to store loli feature flag specification', error: error.message });
    }
});
```

### API Endpoint To Evaluate Feature Flags

#### Postgres

Define a [`LoliClient`](../../reference/sdk/client/index.md) that has a spec loader that
reads the latest specification from the Postgres table.

Use the `LoliClient` instance to evaluate all feature flags when a specific endpoint is called.

```ts
import { LoliClient } from "@loli-feature-flags/loli-sdk";
import type { EvaluationContext } from "@loli-feature-flags/loli-sdk";

const client = new LoliClient(async (validator) => {
    const result = await pool.query(`
        SELECT * 
        FROM loli_feature_flags_specification 
        ORDER BY createdAt DESC 
        LIMIT 1;
    `);

    if ( result.rows.length === 0 ) {
        throw new Error("No specifications have been stored previously.");
    }

    return validator(result.rows[0].specification);
});

app.post("/loli-feature-flags/evaluation/all", async (req, res) => {
    try {
        const evaluationContext : EvaluationContext = {
            user: {
                id: req.user.id,
                email: req.user.email
            },
            environment: process.env.NODE_ENV
        };
        
        const evaluatedFeatureFlags = await client.evaluateAllFeatureFlags(evaluationContext);
        
        res.status(200).json({ featureFlags: evaluatedFeatureFlags });
    } catch (error) {
        console.error('Error evaluating all feature flags:', error);
        res.status(500).json({ message: 'Failed to evaluate all feature flags', error: error.message });
    }
});
```

#### MongoDB

Define a [`LoliClient`](../../reference/sdk/client/index.md) that has a spec loader that
reads the latest specification from the MongoDB collection.

Use the `LoliClient` instance to evaluate all feature flags when a specific endpoint is called.

```ts
import { LoliClient } from "@loli-feature-flags/loli-sdk";
import type { EvaluationContext } from "@loli-feature-flags/loli-sdk";

const client = new LoliClient(async (validator) => {
    const documents = await db.loli_feature_flag_specification.find({})
        .sort({ createdAt: -1 })
        .limit(1)
        .toArray();
    
    if ( documents.length === 0 ) {
        throw new Error("No specifications have been stored previously.");
    }
    
    return validator(documents[0].specification);
});

app.post("/loli-feature-flags/evaluation/all", async (req, res) => {
    try {
        const evaluationContext : EvaluationContext = {
            user: {
                id: req.user.id,
                email: req.user.email
            },
            environment: process.env.NODE_ENV
        };
        
        const evaluatedFeatureFlags = await client.evaluateAllFeatureFlags(evaluationContext);
        
        res.status(200).json({ featureFlags: evaluatedFeatureFlags });
    } catch (error) {
        console.error('Error evaluating all feature flags:', error);
        res.status(500).json({ message: 'Failed to evaluate all feature flags', error: error.message });
    }
});
```

## Frontend

### Integrate Loli UI

<PlainUnderConstruction />

### Access Feature Flags

<PlainUnderConstruction />
