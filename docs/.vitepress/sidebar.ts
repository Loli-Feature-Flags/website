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
                    link: "/reference/specification/schema",
                    items: [
                        {
                            text: "Feature Flag",
                            link: "/reference/specification/schema/feature-flag",
                            items: [
                                { text: "Boolean", link: "/reference/specification/schema/feature-flag/boolean" },
                                { text: "Number", link: "/reference/specification/schema/feature-flag/number" },
                                { text: "String", link: "/reference/specification/schema/feature-flag/string" },
                            ],
                        },
                        {
                            text: "Feature Flag Rule",
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
                    ]
                },
                { text: "Semantic Validity", link: "/reference/specification/semantic-validity" },
            ]
        }
    ]
}
