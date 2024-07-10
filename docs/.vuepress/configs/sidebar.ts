import type {SidebarOptions} from '@vuepress/theme-default'

export const SIDEBAR_CONFIG : SidebarOptions = [
    "/introduction.md",
    {
        text: "Concept",
        link: "/concept/",
        children: [
            "/concept/principles.md",
            "/concept/evaluation-context.md",
            "/concept/segments.md",
            "/concept/feature-flags.md",
            "/concept/specification.md",
            {
                text: "Advanced Concepts",
                link: "/concept/advanced/",
                children: [
                    "/concept/advanced/scheduled-rollouts.md",
                    "/concept/advanced/a-b-testing.md",
                    "/concept/advanced/gradual-rollouts.md",
                    "/concept/advanced/type-safety.md",
                    "/concept/advanced/decoupling.md",
                ]
            }
        ]
    },
    {
        text: "SDK",
        link: "/sdk/",
        children: [
            "/sdk/installation.md",
            {
                text: "Client",
                link: "/sdk/client/",
                children: [
                    "/sdk/client/initialization.md",
                    "/sdk/client/spec-loader.md",
                    "/sdk/client/options.md",
                    "/sdk/client/callbacks.md",
                    "/sdk/client/evaluation.md",
                ]
            },
            {
                text: "Recommendations",
                link: "/sdk/recommendations/",
                children: [
                    "/sdk/recommendations/monoliths.md",
                    "/sdk/recommendations/distributed-systems.md",
                    "/sdk/recommendations/client-side-evaluation.md",
                ]
            },
        ]
    },
    {
        text: "Management UI",
        link: "/ui/",
        children: [
            "/ui/installation.md"
        ]
    },
    "/terminology.md",
    "/best-practices.md",
]
