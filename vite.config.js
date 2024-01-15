import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': { // 将/api路由转发到指定地址
        target: 'http://example.com', // 设置目标服务器地址
        changeOrigin: true, // 支持跨域
        rewrite: (path) => path.replace(/^\/api/, '') // 去除URL前面的'/api'部分
      }
    }
  }
})
