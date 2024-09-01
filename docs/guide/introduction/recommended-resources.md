# Recommended Resources

There are already some great resources about feature flags on the internet.
We want to recommend you some here.

We are not responsible for the external content/sites linked on this page.

## Martin Fowler – Feature Toggles

Martin Fowler has a great article about feature flags/toggles, what they are,
how they are being used, and especially how to categorize them.

The article is highly recommended to learn about the wide range of
applications of feature flags.

Link: https://martinfowler.com/articles/feature-toggles.html

## OpenFeature – Specification

OpenFeature is an open-source specification and collection of libraries aiming to create
a unified abstraction layer on top of existing and future feature flag tools.

OpenFeature employs the facade pattern – meaning you interact with an OpenFeature client,
connect it to a specific feature flag tool ("provider") and are able to replace
providers at any point in time. This allows you to change feature flag tools in the future.
Or even use multiple tools at the same time.

Their specification pages are specific to OpenFeature, but cover many essential basics
you may want to learn about feature flag tools.

Link: https://openfeature.dev/specification/
