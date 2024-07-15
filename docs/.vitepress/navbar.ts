import type { DefaultTheme } from 'vitepress'

export const NAV_CONFIG : DefaultTheme.NavItem[] = [
    {
        text: 'Guide',
        link: "/guide/introduction",
        activeMatch: "/guide",
    },
    {
        text: 'Reference',
        link: '/reference',
        activeMatch: "/reference",
        items: [
            { text: "SDK", link: "/reference/sdk" },
            { text: "UI", link: "/reference/ui" }
        ]
    },
    {
        text: 'Legal',
        items: [
            { text: "License", link: '/legal/license' },
            { text: "Imprint", link: '/legal/imprint' },
            { text: "Data Privacy", link: '/legal/data-privacy' },
        ]
    }
]
