import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from '@vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import {seoPlugin} from "@vuepress/plugin-seo";
import {sitemapPlugin} from "@vuepress/plugin-sitemap";
import {SIDEBAR_CONFIG} from "./configs/sidebar";
import {NAVBAR_CONFIG} from "./configs/navbar";
import {HEAD_CONFIG} from "./configs/head";

const BASE_URL = "https://www.lolifeatureflags.com"

export default defineUserConfig({
  lang: 'en-US',

  title: 'Loli Feature Flags',
  description: 'Build your own feature flag infrastructure for your JavaScript/TypeScript stack.',

  public: "public",

  head: HEAD_CONFIG,

  theme: defaultTheme({
    logo: '/logo.png',
    logoDark: "/logo-dark.png",
    colorMode: "auto",

    docsRepo: "https://github.com/Loli-Feature-Flags/website",
    docsBranch: "main",
    docsDir: "docs",

    navbar: NAVBAR_CONFIG,
    sidebar: SIDEBAR_CONFIG,

    lastUpdated: true,
    lastUpdatedText: "Last update",
    contributors: false,
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
      fallBackImage: `${BASE_URL}/fallback-og-image.jpg`,
      autoDescription: true,
    }),
    sitemapPlugin({
      hostname: BASE_URL,
      changefreq: "always",
      devServer: true
    })
  ],
})
