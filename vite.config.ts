import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import { terser } from 'rollup-plugin-terser'

import manifest from './manifest.config'

const r = (...args: string[]) => resolve(__dirname, ...args)

const port = parseInt(process.env.PORT || '') || 3303

/**
 * more configuration see 👉🏻 https://vitejs.dev/config/
 */
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      /**
       * doc: https://crxjs.dev/vite-plugin/
       */
      crx({ manifest })
    ],
    resolve: {
      alias: {
        '@src': `${r('src')}/`,
        '@common': `${r('src/common')}/`
      }
    },
    server: {
      port,
      open: ''
    },
    build: {
      sourcemap: false,
      assetsDir: 'bundle',
      rollupOptions: {
        input: {
          policy: 'src/pages/PrivacyPolicy/index.html'
        },
        plugins: [
          terser({
            compress: {
              drop_console: true
            }
          })
        ]
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {}
        }
      }
    }
  }
})
