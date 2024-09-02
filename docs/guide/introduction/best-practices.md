# Best Practices

Loli Feature Flags is a toolkit and (pretty much) unopinionated. But is built in a way
to support and enable you to implement best practices.

We want to share some best practices with you.

## Evaluation Location

We recommend **server-side feature flag evaluation**.

Client-side evaluation is not really recommended as Loli specifications can contain
personal data such as email addresses of individual users that would be exposed to clients
in case of client-side evaluation.

You can read more about that here: [Client-Side Evaluation](../../reference/sdk/architectures/client-side-evaluation.md)

## Avoiding Redundant Conditions

We strongly recommend you to avoid defining the same conditions over and over again
for multiple feature flags.

Instead, **make use of segments** to lower the complexity of your feature flag setup and increase performance.
In fact, when evaluating multiple feature flags at once/all feature flags, segments are only evaluated once
and their evaluation result is cache resulting in a performance boost if segments are widely used in
your feature flag specification.

## Gradual Rollouts

It is greatly recommended to adopt gradual/slow rollouts as much as possible. This lowers the effect of
bugs that are part of feature releases. In case there bugs, only a few users are affected at once,
support channels are not flooded and you have "more time" to react to fix bugs.

## Distributed Systems

For distributed systems we recommended using a very fast read data storage like Redis or ValKey.
The reason: Then all your service instance can always directly read from fast read storage 
which ensures all distributed service instances use the same specification at the same time.

You can read more about that here: [Multi Instance Services](../../reference/sdk/architectures/multi-instance-services.md)

## Serverless

We also have some recommendations if you are operating in a serverless environment: [Serverless](../../reference/sdk/architectures/serverless.md)

## Versioning

When storing Loli specifications and changes made to it in your data storage, we strongly recommend to
implement/enable some sort of versioning, so that you have a list of past specifications you can also roll back to.

When you use a **relational database** or a **NoSQL database** like Mongo, just store one row/document for
each version and attach a timestamp. When reading the specification, fetch the latest version based on the timestamp.
**Make sure to add an index to such an timestamp to guarantee fast reads/lookups.**

When you use a data storage like **Vercel's Edge Config**, versioning is built-in.

When using **S3 Buckets**, you can enable versioning there. 

## Auditing

In addition to implementing a change history, we strongly recommend you to store for each version
the editor/author that made the corresponding changes.

This enables you to identify who to talk to when wanting to understand changes that were made.
