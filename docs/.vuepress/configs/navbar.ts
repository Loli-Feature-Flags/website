import {NavbarOptions} from "@vuepress/theme-default";

export const NAVBAR_CONFIG : NavbarOptions = [
    '/',
    {
        text: "Guides",
        children: [
            "/introduction.md",
            {
                text: "Concept",
                link: "/concept/"
            },
            "/terminology.md",
            "/best-practices.md",
        ]
    },
    {
        text: "Reference",
        children: [
            {
                text: "SDK",
                children: [
                    {
                        text: "Installation",
                        link: "/sdk/installation.md"
                    },
                    {
                        text: "Client",
                        link: "/sdk/client/"
                    },
                    {
                        text: "Recommendations",
                        link: "/sdk/recommendations/"
                    }
                ]
            },
            {
                text: "Management UI",
                children: [
                    {
                        text: "Installation",
                        link: "/ui/installation.md"
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
