import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': "/src",
      "@themes": "/src/themes",
      "@slices": "/src/states_management/slices",
      "@components": '/src/app/components',
      "@paths": "/src/paths",
      "@icons": "/src/icons"
    },
  },
})
