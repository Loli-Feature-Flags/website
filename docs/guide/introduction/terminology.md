# Terminology

Independent of whether you are new to feature flags in general and/or to Loli Feature Flags or not,
this page clarifies some terminology that is used throughout the docs.

## A/B Testing

A/B testing means conducting an experiment with two or more versions, but usually only two versions.
The goal is to serve two different variants of a feature/page/whatever to randomly selected users.

The performance of each variant needs to be measured using some tracking or for example conversion data.
At the end of an A/B testing experiment, usually one variant is selected. If no significant change
was measured, more iterations can be made.

Regarding feature flag tooling, A/B testing can be achieved via [multivariate feature flags](#multivariate-feature-flags).
That are feature flags, that serve different values based on certain rules or just randomly.

A/B testing is sometimes also called [split testing](#split-testing).

## Condition

In the world of feature flag tools, a condition is usually referred to a [targeting](#targeting) condition/rule.
A feature flag can be configured to serve certain values if certain conditions are met.

A condition can be as simple as _"Does the email address end with @acme.com?"_ or as complex as
_"Does this user attribute match the regular expression /^\d+_\w+_\d+$/?"_.

## Evaluation Context

The evaluation context is a complex name for the [user properties](#user-properties) that feature flags
are evaluated on. Why such a complex name?

The data that feature flags are evaluated on does not necessarily need to be user data only. It can
also be data about an entity that the user owns. Or data about the current environment.
It can be anything.

In the end, the evaluation context is passed to the feature flag tool to **evaluate** feature flags and their conditions
correctly by using the given data as **contextual information**. Hence, **evaluation context**.

Essentially, evaluation context properties are all attributes you may want to use for feature flag [targeting](#targeting)
and [conditions](#condition) to target individual users or user [segments](#segment).

## Feature Flag

It's hard to describes feature flags generically. But here is a try:

- Most feature flags are like a physical switches. They can be on or off. These output binary boolean (true/false) values.
- Feature flags can have different states for different users based on the [evaluation context](#evaluation-context) and [targeting](#targeting) rules.
- There are also feature flags that can have more than two values (variants). They are like switches with e.g. 6 different positions.
- Such multi-variate feature flags are usually achieved by outputting non-binary string or number values.

## Feature Flag System

A feature flag system is the complete suite/setup to work with feature flags, manage them, and evaluate them.

Such a system might include SDK libraries, third party services, APIs, specifications, and more to drive the
whole feature flag tooling.

## Feature Toggle

The term "feature toggle" is just a different name for [feature flags](#feature-flag). The word "toggle"
indicates more or less binary "on/off" feature flags.

But as feature flags can also serve be [multivariate flags](#multivariate-feature-flags), the term "toggle"
is used rarely.

## Gradual Rollout

A gradual rollout refers to the process of slowly releasing a feature to a set of users. What does that mean?

It means the set of users having access to a feature is incrementally/gradually increased.

- First, maybe **5% of all users** get the feature.
- Problems found?
  - Yes: Disable feature flag, fix issues, and start rollout again. 
  - No: Rollout is increased to **25% of all users**?
- Problems found?
  - Yes: Disable feature flag, fix issues, and start rollout again.
  - No: Rollout is increased to **50% of all users**?
- Problems found?
  - Yes: Disable feature flag, fix issues, and start rollout again.
  - No: Rollout is increased to **100% of all users**?

## Loli

Ha, you might wonder overall why this toolkit is called "**Loli** Feature Flags". 😉

And it's not referring to a lollipop. 🍭

Well, it's hard to come up with names. So when looking for some cool/unique names the search for the words
"toggle", "change", and "switch" in foreign languages began.

So the Hawaiian word _"loli"_ was found, meaning various things. Such as "change", "alter", "influence", and much more
(apparently also sea slug, 🐌).

The phrase "_Ho’ololi_" means _"to cause change"_. That fits very well to an innovative feature flag toolkit with 
a novel approach.

Check this page out: https://hemomi.com/2015/06/18/loli/

## Multivariate Feature Flags

Multivariate feature flag can output more than two values – such as string or number values. When speaking of such
feature flags, the values are often referred to as the "variants" of the feature flag.

Multivariate feature flags can be used to create advanced [A/B tests](#ab-testing) by defining multiple variants and
serving them e.g. equally distributed to all users and measuring the impact of various feature variants. 

## Release

Now it gets funny. What is a "release"? Is it the moment when new code is deployed to production? Is it the moment
when a new **feature becomes accessible** for users – when **being released**?

We think it's the latter. And as the aspect "feature becomes accessible" is ideally controlled by a feature flag,
we say that feature releases can be controlled by feature flags.

But of course, they don't have to. If a feature is not gate-kept by a feature flag, the feature is released once
the new code is deployed to production.

## Rollout

Okay, now it gets even funnier. What exactly is a rollout? 

It can mean a simple [release](#release).

But the word "rollout" is also often used for terms such as [gradual rollouts](#gradual-rollout) or
[scheduled rollouts](#scheduled-rollout).

So possible rollout refers to a more "advanced release"?

## Scheduled Rollout

A scheduled rollout enables defining a precise rollout/release data. So you don't need to change the feature flag
value on a specific day and time.

In advance, you define a [condition](#condition) as part of the feature flag [targeting](#targeting) that will
read for example something like follows for a binary feature flag/toggle:
- Before the 1st of December, serve `off`/`false` for the feature flag `xmas-banner`.
- Starting on the 1st of December, serve `on`/`true` for the feature flag `xmas-banner`.

## Segment

A segment basically partitions your set of users into multiple partitions/buckets/groups/**segments**.

Segments can be used to defines a single time a certain set of users. Then, segments can be used
for the feature flag [targeting](#targeting) to refer to a certain set of users without redefining
the user set.

This means that segments can act as "reusable condition (sets)".

Side note: Sometimes, a user can be only in one of multiple segments. Imagine you have some beta tester users.
Those who are, are part of the beta tester segments. The others are not part of the segment.

But what if you have the segments "English speaking" and "German speaking"? Possibly some users
can speak both English and German. So if you allow your users to specify all the languages they speak,
they might be part of multiple segments.

## Specification

When talking about the "specification" respectively "Loli specification" we are semantically referring to 
a set of feature flag, segment and evaluation context definitions. These describe your actually feature flag
setup.

Technically, the "specification" respectively "Loli specification" refers to structured JSON data that
follows a specific schema. The [Loli Specification Schema](../../reference/specification/schema/index.md).

## Split Testing

Split testing is just another term for [A/B testing](#ab-testing). Why "split" testing? Well in a 
A/B test you **split** the user traffic/set of users into distinct sets.

## Targeting

Feature flag targeting allows you to define when for example a feature flag shall be "on" or "off".

Targeting usually involves creating [conditions](#condition) that are being used to express, when which
feature flag value shall be served.

This means, you can specifically target certain users and serve them specific feature flag values.

Let's imagine we would have the feature flag `ai-pilot`. We want to first roll it out to all English-speaking
users, because the AI pilot feature is optimized for the English only. So we want to target all English-speaking
users and serve them "on". This targeting rule/condition implicitly states, that all non-English-speaking
shall be served with "off".

## User Properties

User properties are all attributes of a user you may want to use for feature flag [targeting](#targeting)
and [conditions](#condition) to target individual users or user [segments](#segment).

As feature flag tools are often used for releasing features to users, the term "user properties" or
"user attributes" is widely used.

A more generic name is ["evaluation context"](#evaluation-context).
