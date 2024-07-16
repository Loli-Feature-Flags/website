# Single Instance Services

We are now talking about services (monolith and microservices) that use
single instances per service (the whole monolith or each individual microservice).

You ideally have **one** backend and **one** frontend per _service_, or **one** full-stack
application per _service_.

## General

This scenario makes working with feature flags and the Loli SDK very easy. You can
simply create one client e.g. on the backend side, pass evaluated feature flags to
the frontend, and that's it.

## Evaluation Location

We always recommend to evaluate feature flags on the backend side. The reason
for that is very simple: Your specification may contain personal data like
email addresses you use in conditions.

To not expose such data publicly to all users, it is recommended to instantiate
a `LoliClient` on the backend side. The backend then can offer an endpoint
to (all) evaluate feature flags for the current user and return a response
with (all) feature flag values.

You may even attach feature flag values to a session. That is ultimately up to you.

If you use a full-stack framework like Nuxt.js or Next.js, it is recommended
to offer an API endpoints/server side data loader that evaluates feature flags so
that the specification is not exposed.

## Push Specification Changes

In case you want the client to eagerly reload the specification once it has been
updated at the storage location you use, you can do that very easily for
a monolith.

A `LoliClient` instance offers the method [`triggerSpecReload`](../client/other-functions#triggerspecreload)
with which you can force a client to reload the specification via the spec loader.

Imagine your monolith has an endpoint to save the newest specification from the
management UI. Then this endpoint could in the end simply call `client.triggerSpecReload()`
to let the client reload the specification before its cache becomes stale.
