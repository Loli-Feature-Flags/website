import {HeadConfig} from "vitepress";

export const HEAD_CONFIG : HeadConfig[] = [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', { defer: "", "data-website-id": "f032f577-3cd9-4814-bc23-f89cf03d1916", src: "https://umami.peter-kuhmann.de/script.js"}],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Loli Feature Flags | Feature flags, rethought.' }],
    ['meta', { property: 'og:description', content: 'Build your own feature flag infrastructure for your JavaScript/TypeScript stack.' }],
    ['meta', { property: 'og:site_name', content: 'Loli Feature Flags' }],
    ['meta', { property: 'og:image', content: 'https://www.lolifeatureflags.com/og-image.jpg' }],
    ['meta', { property: 'og:url', content: 'https://www.lolifeatureflags.com/' }],
]
