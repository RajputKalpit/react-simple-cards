import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: 'https://RajputKalpit.gitlab.io/react-simple-cards/',
  },
})
