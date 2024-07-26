import {HeadConfig} from "vitepress";

export const HEAD_CONFIG : HeadConfig[] = [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', { defer: "", "data-domain": "lolifeatureflags.com", src: "https://plausible.io/js/script.js"}],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Loli Feature Flags | Feature flags, rethought.' }],
    ['meta', { property: 'og:description', content: 'Build your own feature flag infrastructure for your JavaScript/TypeScript stack.' }],
    ['meta', { property: 'og:site_name', content: 'Loli Feature Flags' }],
    ['meta', { property: 'og:image', content: 'https://www.lolifeatureflags.com/og-image.jpg' }],
    ['meta', { property: 'og:url', content: 'https://www.lolifeatureflags.com/' }],
]
