import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { minifyHtml, injectHtml } from 'vite-plugin-html'

const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// If your port is set to 80, use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || import.meta.env.VITE_APP_PORT // dev port

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    minifyHtml(),
    injectHtml({
      injectData: {
        title: import.meta.env.VITE_TITLE
      }
    })
  ]
})
