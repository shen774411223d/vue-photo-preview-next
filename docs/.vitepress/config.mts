import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'vue-photo-preview-next',
  description: 'docs and demo',
  base: '/vue-photo-preview-next/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: '/demos' },
      { text: 'Api', link: '/apis' },
    ],

    sidebar: [
      {
        text: 'Home',
        items: [
          { text: 'demo', link: '/demos' },
          { text: 'api', link: '/apis' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/shen774411223d/vue-photo-preview-next' }],
  },
})
