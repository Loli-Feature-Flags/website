import {NavbarOptions} from "@vuepress/theme-default";

export const NAVBAR_CONFIG : NavbarOptions = [
    '/',
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
        children: [
            {
                text: "JS/TS SDK",
                link: "/reference/sdk/",
                children: [
                    {
                        text: "Installation",
                        link: "/reference/sdk/installation.md"
                    }
                ]
            },
            {
                text: "Management UI",
                link: "/reference/ui/",
                children: [
                    {
                        text: "Installation",
                        link: "/reference/ui/installation.md"
                    }
                ]
            }
        ]
    },
    {
        text: "Discord",
        link: "https://discord.gg/njRQHRNu"
    }
]
