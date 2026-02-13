import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'localhost',
      'print.kksoft.kr',
      '.kksoft.kr'  // 서브도메인도 모두 허용
    ]
  }
})
