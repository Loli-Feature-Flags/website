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
        }
    ],
    '/reference': [
        {
            text: "SDK",
            collapsed: false,
            link: "/reference/sdk",
            items: [
                { text: "Installation", link: "/reference/sdk/installation" },
                {
                    text: "Client",
                    collapsed: false,
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
                    text: "Recommendations",
                    collapsed: false,
                    link: "/reference/sdk/recommendations",
                    items: [
                        { text: "Single Instance Services", link: "/reference/sdk/recommendations/single-instance-services" },
                        { text: "Multi Instance Services", link: "/reference/sdk/recommendations/multi-instance-services" },
                        { text: "Client-Side Evaluation", link: "/reference/sdk/recommendations/client-side-evaluation" },
                    ]
                },
            ]
        },
        {
            text: "Management UI",
            collapsed: false,
            link: "/reference/ui",
            items: [
                { text: "Installation", link: "/reference/ui/installation" },
            ]
        }
    ]
}
