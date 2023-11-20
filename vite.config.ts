import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sitramasa-client/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8100/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  }
})