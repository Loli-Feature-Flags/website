import { defineConfig } from 'vitepress'
import {NAV_CONFIG} from "./navbar";
import {SIDEBAR_CONFIG} from "./sidebar";
import {HEAD_CONFIG} from "./head";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Loli Feature Flags",
  description: "Build your own feature flag infrastructure for your JavaScript/TypeScript stack.",
  head: HEAD_CONFIG,
  lastUpdated: true,

  sitemap: {
    hostname: 'https://www.lolifeatureflags.com',
  },

  themeConfig: {
    logo: {
      light: "/logo.png",
      dark: "/logo-dark.png",
    },

    footer: {
      message: "Released under the MIT Licensed",
      copyright: "Copyright © 2024-present Peter Kuhmann"
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: NAV_CONFIG,
    sidebar: SIDEBAR_CONFIG,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Loli-Feature-Flags' },
    ],

    editLink: {
      pattern: 'https://github.com/Loli-Feature-Flags/website/edit/main/docs/:path'
    },

    search: {
      provider: 'local'
    }
  }
})
