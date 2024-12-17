import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import tailwindcss from '@tailwindcss/vite'

import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers: [IconsResolver()],
    }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
    }),
    Icons(),
    viteCompression({
      algorithm: 'gzip', // Utiliser Gzip
      ext: '.gz', // Extension des fichiers compressés
      threshold: 10240, // Ne pas compresser les fichiers de moins de 10 Ko
      deleteOriginFile: false, // Conserver les fichiers non compressés
    }),
    tailwindcss(),
  ],
  // css: {
  //   postcss: {
  //     plugins: [autoprefixer()]
  //   }
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
