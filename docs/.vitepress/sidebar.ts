import type {DefaultTheme} from "vitepress"

export const SIDEBAR_CONFIG : DefaultTheme.Sidebar = {
    '/legal/': [
        {
            text: 'Legal',
            collapsed: false,
            items: [
                { text: "License", link: '/legal/license' },
                { text: "Imprint", link: '/legal/imprint' },
                { text: "Data Privacy", link: '/legal/data-privacy' },
            ]
        },
        {
            text: "Guide",
            link: "/guide/introduction"
        },
        {
            text: "Reference",
            link: "/reference/sdk"
        }
    ],
    '/guide/': [
        {
            text: "Introduction",
            collapsed: false,
            items: [
                { text: "What is Loli?", link: "/guide/introduction" },
                { text: "Getting Started", link: "/guide/getting-started" },
                { text: "Terminology", link: "/guide/terminology" },
                { text: "Best Practices", link: "/guide/best-practices" },
            ]
        },
        {
            text: "Concept",
            collapsed: false,
            link: "/guide/concept/",
            items: [
                { text: "Principles", link: "/guide/concept/principles" },
                { text: "Evaluation Context", link: "/guide/concept/evaluation-context" },
                { text: "Segments", link: "/guide/concept/segments" },
                { text: "Feature Flags", link: "/guide/concept/feature-flags" },
                { text: "Specification", link: "/guide/concept/specification" },
                {
                    text: "Advanced",
                    link: "/guide/concept/advanced/",
                    collapsed: false,
                    items: [
                        { text: "Scheduled Rollouts", link: "/guide/concept/advanced/scheduled-rollouts" },
                        { text: "A/B Testing", link: "/guide/concept/advanced/a-b-testing" },
                        { text: "Gradual Rollouts", link: "/guide/concept/advanced/gradual-rollouts" },
                        { text: "Type Safety", link: "/guide/concept/advanced/type-safety" },
                        { text: "Decoupling", link: "/guide/concept/advanced/decoupling" },
                    ]
                },
            ]
        },
        {
            text: "Reference",
            link: "/reference/sdk"
        },
        {
            text: "Legal",
            link: "/legal/license"
        }
    ],
    '/reference': [
        {
            text: "SDK",
            link: "/reference/sdk",
            items: [
                { text: "Installation", link: "/reference/sdk/installation" },
                {
                    text: "Client",
                    collapsed: true,
                    link: "/reference/sdk/client",
                    items: [
                        { text: "Initialization", link: "/reference/sdk/client/initialization" },
                        { text: "Spec Loader", link: "/reference/sdk/client/spec-loader" },
                        { text: "Options", link: "/reference/sdk/client/options" },
                        { text: "Callbacks", link: "/reference/sdk/client/callbacks" },
                        { text: "Evaluation", link: "/reference/sdk/client/evaluation" },
                        { text: "Other Functions", link: "/reference/sdk/client/other-functions" },
                    ]
                },
                {
                    text: "Architectures",
                    collapsed: true,
                    link: "/reference/sdk/architectures",
                    items: [
                        { text: "Single Instance Services", link: "/reference/sdk/architectures/single-instance-services" },
                        { text: "Multi Instance Services", link: "/reference/sdk/architectures/multi-instance-services" },
                        { text: "Serverless", link: "/reference/sdk/architectures/serverless" },
                        { text: "Client-Side Evaluation", link: "/reference/sdk/architectures/client-side-evaluation" },
                    ]
                },
                { text: "GitHub Repository", link: "https://github.com/Loli-Feature-Flags/loli-sdk" },
                { text: "NPM Package", link: "https://www.npmjs.com/package/@loli-feature-flags/loli-sdk" }
            ]
        },
        {
            text: "Management UI",
            link: "/reference/ui",
            items: [
                { text: "Installation", link: "/reference/ui/installation" },
                { text: "Mounting", link: "/reference/ui/mounting" },
                { text: "Options", link: "/reference/ui/options" },
                { text: "Interface", link: "/reference/ui/interface" },
                { text: "GitHub Repository", link: "https://github.com/Loli-Feature-Flags/loli-ui" },
                { text: "NPM Package", link: "https://www.npmjs.com/package/@loli-feature-flags/loli-ui" },
            ]
        },
        {
            text: "Specification",
            link: "/reference/specification",
            items: [
                {
                    text: "Schema",
                    collapsed: true,
                    link: "/reference/specification/schema",
                    items: [
                        {
                            text: "Feature Flag",
                            collapsed: true,
                            link: "/reference/specification/schema/feature-flag",
                            items: [
                                { text: "Boolean", link: "/reference/specification/schema/feature-flag/boolean" },
                                { text: "Number", link: "/reference/specification/schema/feature-flag/number" },
                                { text: "String", link: "/reference/specification/schema/feature-flag/string" },
                            ],
                        },
                        {
                            text: "Feature Flag Rule",
                            collapsed: true,
                            link: "/reference/specification/schema/feature-flag-rule",
                            items: [
                                { text: "Boolean", link: "/reference/specification/schema/feature-flag-rule/boolean" },
                                { text: "Number", link: "/reference/specification/schema/feature-flag-rule/number" },
                                { text: "String", link: "/reference/specification/schema/feature-flag-rule/string" },
                            ],
                        },
                        { text: "Segment", link: "/reference/specification/schema/segment" },
                        { text: "Evaluation Context", link: "/reference/specification/schema/evaluation-context" },
                        { text: "Property", link: "/reference/specification/schema/property" },
                        { text: "Condition Set", link: "/reference/specification/schema/condition-set" },
                        {
                            text: "Condition",
                            collapsed: true,
                            link: "/reference/specification/schema/condition",
                            items: [
                                {
                                    text: "Property Conditions",
                                    collapsed: true,
                                    link: "/reference/specification/schema/condition/property",
                                    items: [
                                        { text: "String", link: "/reference/specification/schema/condition/property/string" },
                                        { text: "Number", link: "/reference/specification/schema/condition/property/number" },
                                        { text: "Boolean", link: "/reference/specification/schema/condition/property/boolean" },
                                        { text: "String Array", link: "/reference/specification/schema/condition/property/string-array" },
                                        { text: "Number Array", link: "/reference/specification/schema/condition/property/number-array" },
                                        { text: "Boolean Array", link: "/reference/specification/schema/condition/property/boolean-array" },
                                    ]
                                },
                                { text: "Always True", link: "/reference/specification/schema/condition/always-true" },
                                { text: "Date Time", link: "/reference/specification/schema/condition/date-time" },
                                { text: "Segment", link: "/reference/specification/schema/condition/segment" },
                                { text: "Condition Set", link: "/reference/specification/schema/condition/condition-set" },
                            ]
                        },
                    ]
                },
                { text: "Semantic Validity", link: "/reference/specification/semantic-validity" },
            ]
        },
        {
            text: "Guide",
            link: "/guide/introduction"
        },
        {
            text: "Legal",
            link: "/legal/license"
        },
    ]
}
