import type {DefaultTheme} from "vitepress"

export const SIDEBAR_CONFIG : DefaultTheme.Sidebar = {
    '/legal/': [
        {
            text: 'Legal',
            collapsed: false,
            items: [
                { text: "License", link: '/legal/license.md' },
                { text: "Imprint", link: '/legal/imprint.md' },
                { text: "Data Privacy", link: '/legal/data-privacy.md' },
            ]
        },
        {
            text: "Guide",
            link: "/guide/introduction/index.md"
        },
        {
            text: "Reference",
            link: "/reference/sdk/index.md"
        }
    ],
    '/guide/': [
        {
            text: "Introduction",
            collapsed: false,
            items: [
                { text: "What is Loli?", link: "/guide/introduction/index.md" },
                { text: "Getting Started", link: "/guide/introduction/getting-started.md" },
                { text: "Features", link: "/guide/introduction/features.md" },
                { text: "Best Practices", link: "/guide/introduction/best-practices.md" },
                { text: "Terminology", link: "/guide/introduction/terminology.md" },
                { text: "Resources", link: "/guide/introduction/resources.md" },
                { text: "Kudos", link: "/guide/introduction/kudos.md" },
            ]
        },
        {
            text: "Concepts",
            collapsed: false,
            link: "/guide/concepts/index.md",
            items: [
                { text: "Principles", link: "/guide/concepts/principles.md" },
                { text: "Evaluation Context", link: "/guide/concepts/evaluation-context.md" },
                { text: "Segments", link: "/guide/concepts/segments.md" },
                { text: "Feature Flags", link: "/guide/concepts/feature-flags.md" },
                { text: "Specification", link: "/guide/concepts/specification.md" },
                {
                    text: "Advanced",
                    link: "/guide/concepts/advanced/index.md",
                    collapsed: false,
                    items: [
                        { text: "Scheduled Rollouts", link: "/guide/concepts/advanced/scheduled-rollouts.md" },
                        { text: "A/B Testing", link: "/guide/concepts/advanced/a-b-testing.md" },
                        { text: "Gradual Rollouts", link: "/guide/concepts/advanced/gradual-rollouts.md" },
                        { text: "Type Safety", link: "/guide/concepts/advanced/type-safety.md" },
                        { text: "Decoupling", link: "/guide/concepts/advanced/decoupling.md" },
                        { text: "Emergency Mode", link: "/guide/concepts/advanced/emergency-mode.md" },
                    ]
                },
            ]
        },
        {
            text: "Reference",
            link: "/reference/sdk/index.md"
        },
        {
            text: "Legal",
            link: "/legal/license.md"
        }
    ],
    '/reference': [
        {
            text: "SDK",
            link: "/reference/sdk/index.md",
            items: [
                { text: "Installation", link: "/reference/sdk/installation.md" },
                {
                    text: "Client",
                    collapsed: true,
                    link: "/reference/sdk/client/index.md",
                    items: [
                        { text: "Initialization", link: "/reference/sdk/client/initialization.md" },
                        { text: "Spec Loader", link: "/reference/sdk/client/spec-loader.md" },
                        { text: "Options", link: "/reference/sdk/client/options.md" },
                        { text: "Callbacks", link: "/reference/sdk/client/callbacks.md" },
                        { text: "Evaluation", link: "/reference/sdk/client/evaluation.md" },
                        { text: "Other Functions", link: "/reference/sdk/client/other-functions.md" },
                    ]
                },
                {
                    text: "Architectures",
                    collapsed: true,
                    link: "/reference/sdk/architectures/index.md",
                    items: [
                        { text: "Single Instance Services", link: "/reference/sdk/architectures/single-instance-services.md" },
                        { text: "Multi Instance Services", link: "/reference/sdk/architectures/multi-instance-services.md" },
                        { text: "Serverless", link: "/reference/sdk/architectures/serverless.md" },
                        { text: "Client-Side Evaluation", link: "/reference/sdk/architectures/client-side-evaluation.md" },
                    ]
                },
                { text: "GitHub Repository", link: "https://github.com/Loli-Feature-Flags/loli-sdk" },
                { text: "NPM Package", link: "https://www.npmjs.com/package/@loli-feature-flags/loli-sdk" }
            ]
        },
        {
            text: "Management UI",
            link: "/reference/ui/index.md",
            items: [
                { text: "Installation", link: "/reference/ui/installation.md" },
                { text: "Mounting", link: "/reference/ui/mounting.md" },
                { text: "Options", link: "/reference/ui/options.md" },
                { text: "Interface", link: "/reference/ui/interface.md" },
                { text: "GitHub Repository", link: "https://github.com/Loli-Feature-Flags/loli-ui" },
                { text: "NPM Package", link: "https://www.npmjs.com/package/@loli-feature-flags/loli-ui" },
            ]
        },
        {
            text: "Specification",
            link: "/reference/specification/index.md",
            items: [
                {
                    text: "Schema",
                    collapsed: true,
                    link: "/reference/specification/schema/index.md",
                    items: [
                        {
                            text: "Feature Flag",
                            collapsed: true,
                            link: "/reference/specification/schema/feature-flag/index.md",
                            items: [
                                { text: "Boolean", link: "/reference/specification/schema/feature-flag/boolean.md" },
                                { text: "Number", link: "/reference/specification/schema/feature-flag/number.md" },
                                { text: "String", link: "/reference/specification/schema/feature-flag/string.md" },
                            ],
                        },
                        {
                            text: "Feature Flag Rule",
                            collapsed: true,
                            link: "/reference/specification/schema/feature-flag-rule/index.md",
                            items: [
                                { text: "Boolean", link: "/reference/specification/schema/feature-flag-rule/boolean.md" },
                                { text: "Number", link: "/reference/specification/schema/feature-flag-rule/number.md" },
                                { text: "String", link: "/reference/specification/schema/feature-flag-rule/string.md" },
                            ],
                        },
                        { text: "Segment", link: "/reference/specification/schema/segment.md" },
                        { text: "Evaluation Context", link: "/reference/specification/schema/evaluation-context.md" },
                        { text: "Property", link: "/reference/specification/schema/property.md" },
                        { text: "Condition Set", link: "/reference/specification/schema/condition-set.md" },
                        {
                            text: "Condition",
                            collapsed: true,
                            link: "/reference/specification/schema/condition/index.md",
                            items: [
                                {
                                    text: "Property Conditions",
                                    collapsed: true,
                                    link: "/reference/specification/schema/condition/property/index.md",
                                    items: [
                                        { text: "String", link: "/reference/specification/schema/condition/property/string.md" },
                                        { text: "Number", link: "/reference/specification/schema/condition/property/number.md" },
                                        { text: "Boolean", link: "/reference/specification/schema/condition/property/boolean.md" },
                                        { text: "String Array", link: "/reference/specification/schema/condition/property/string-array.md" },
                                        { text: "Number Array", link: "/reference/specification/schema/condition/property/number-array.md" },
                                        { text: "Boolean Array", link: "/reference/specification/schema/condition/property/boolean-array.md" },
                                    ]
                                },
                                { text: "Always True", link: "/reference/specification/schema/condition/always-true.md" },
                                { text: "Date Time", link: "/reference/specification/schema/condition/date-time.md" },
                                { text: "Segment", link: "/reference/specification/schema/condition/segment.md" },
                                { text: "Condition Set", link: "/reference/specification/schema/condition/condition-set.md" },
                            ]
                        },
                    ]
                },
                {
                    text: "Semantic Validity",
                    collapsed: true,
                    link: "/reference/specification/semantic-validity/index.md",
                    items: [
                        { text: "Duplicated IDs", link: "/reference/specification/semantic-validity/duplicated-ids.md" },
                        { text: "Duplicated Feature Flag Name", link: "/reference/specification/semantic-validity/duplicated-feature-flag-name.md" },
                        { text: "Duplicated Property Path", link: "/reference/specification/semantic-validity/duplicated-property-path.md" },
                        { text: "Condition And Property Data Type Mismatch", link: "/reference/specification/semantic-validity/condition-property-data-type-mismatch.md" },
                        { text: "Non-Existing Property Referenced", link: "/reference/specification/semantic-validity/non-existing-property-referenced.md" },
                        { text: "Non-Existing Segment Referenced", link: "/reference/specification/semantic-validity/non-existing-segment-referenced.md" },
                        { text: "No Values On Match", link: "/reference/specification/semantic-validity/no-values-on-match.md" },
                        { text: "Rollout Percentage Sum Not 100%", link: "/reference/specification/semantic-validity/rollout-percentage-sum-not-one-hundred.md" },
                        { text: "Cyclic Dependencies Present", link: "/reference/specification/semantic-validity/cyclic-dependencies-present.md" },
                        { text: "Entity Is Part Of Cyclic Dependency", link: "/reference/specification/semantic-validity/entity-part-of-cyclic-dependency.md" },
                    ]
                },
            ]
        },
        {
            text: "Guide",
            link: "/guide/introduction/index.md"
        },
        {
            text: "Legal",
            link: "/legal/license.md"
        },
    ]
}
