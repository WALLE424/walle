import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// Vite 配置
export default defineConfig({
  plugins: [vue()], // 使用 Vue 插件
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 设置路径别名 @ 指向 src
    }
  },
  server: {
    port: 3000, // 前端启动端口
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 代理到后端接口
        changeOrigin: true // 允许跨域
      }
    }
  }
})
