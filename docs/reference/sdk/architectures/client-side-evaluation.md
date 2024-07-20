# Client-Side Evaluation

In most cases we do not recommend client-side evaluation of feature flags.

## When Not

There are two reasons why we do not recommend client-side evaluation is:

### Sensitive User Data

Reason 1: Most often sensitive user data ends up in your Loli feature flags specification.

In case of client-side evaluation the feature flags specification needs to be available in the client.
**This way, sensitive user data gets exposed to all users.**

### Full-Stack Evaluation

Reason 2: Often times you also need to protect certain server-side business logic by feature flag
states. In such cases it makes sense to centralize the feature flag evaluation and move it to the server-side.

Otherwise, your client possibly evaluates feature flags using another (newer or older) feature flags
specification than your backend. This could lead to inconsistencies when users work with your application.

## When It's Okay

If your feature flags specification only defines properties in the "Evaluation Context"
section which can **all be classified as non-sensitive user data**, client-side
evaluation can be seen as "okay".

## Implementation

We are not going into detail here. But the rough setup needs to look like this:
- Install the SDK to your frontend app.
- Instantiate a `LoliClient` instance on the frontend side.
- Specify a spec loader that lets the client load the Loli specification from a remote location.
- Evaluate feature flags just like normal using the `LoliClient`.

## Summary

In the end, it's up to you to elaborate the downside/upside and come up with a risk profile
and decide if client-side evaluation is a viable solution for you or perhaps even necessary.
