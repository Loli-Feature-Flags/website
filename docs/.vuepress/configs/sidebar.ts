import type {SidebarOptions} from '@vuepress/theme-default'

export const SIDEBAR_CONFIG : SidebarOptions = [
    {
        text: "Guide",
        link: "/guide/",
        children: [
            "/guide/introduction.md",
            "/guide/getting-started.md"
        ]
    },
    {
        text: "Reference",
        link: "/reference/",
        children: [
            {
                text: "JS/TS SDK",
                link: "/reference/sdk/",
                children: [
                    "/reference/sdk/installation.md",
                    "/reference/sdk/client.md"
                ]
            },
            {
                text: "Management UI",
                link: "/reference/ui/",
                children: [
                    "/reference/ui/installation.md"
                ]
            }
        ]
    }
]
