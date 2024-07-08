import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from '@vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import {seoPlugin} from "@vuepress/plugin-seo";
import {sitemapPlugin} from "@vuepress/plugin-sitemap";

const BASE_URL = "https://www.lolifeatureflags.com"

export default defineUserConfig({
  lang: 'en-US',

  title: 'Loli Feature Flags',
  description: 'Build your own feature flag infrastructure for your JavaScript/TypeScript stack.',

  public: "public",

  head: [
      ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  theme: defaultTheme({
    logo: '/logo.png',
    logoDark: "/logo-dark.png",
    navbar: [
      '/',
      '/get-started/',
      '/concept/',
      {
        text: "Libraries",
        children: [
            '/sdk/',
            '/ui/'
        ]
      },
      {
        text: "Discord",
        link: "https://discord.gg/njRQHRNu"
      }
    ],
    colorMode: "auto",

    repo: "https://github.com/Loli-Feature-Flags",
    docsRepo: "https://github.com/Loli-Feature-Flags/loli-docs",
    docsBranch: "main",
    docsDir: "docs"
  }),

  bundler: viteBundler(),

  plugins: [
    searchProPlugin({
      indexContent: true,
      autoSuggestions: false,
    }),
    seoPlugin({
      hostname: BASE_URL,
      author: {
        name: "Peter Kuhmann",
        url: "https://peter-kuhmann.de",
        email: "info@peter-kuhmann.de",
      },
      fallBackImage: `${BASE_URL}/fallback-og-image.jpg`
    }),
    sitemapPlugin({
      hostname: BASE_URL,
      changefreq: "always",
      devServer: true
    })
  ],
})
