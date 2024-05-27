import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const publicPathMap = {
  preview: '/',
  development: '/',
}

const isCustomElement = (tag) => {
  console.log('isCustomElement', tag)
  return tag.startsWith('td-') || tag.startsWith('tdesign-theme')
}

export default ({ mode }) => {
  console.log('vite config', mode)
  return defineConfig({
    base: publicPathMap[mode],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../'),
        '@/src': path.resolve(__dirname, '../src/'),
        'vue-photo-preview-next': path.resolve(__dirname, '../src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 17000,
      open: '/',
      https: false,
      fs: {
        allow: ['..'],
      },
    },
    build: {
      outDir: '../_site',
    },
    plugins: [
      vue({
        ssr: false,
      }),
      vueJsx({}),
    ],
    optimizeDeps: {
      include: ['prismjs', 'prismjs/components/prism-bash.js'],
    },
  })
}
