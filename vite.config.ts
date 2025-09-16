import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mui/material/Grid2': '/src/mui-grid2-shim.tsx',
      '@mui/material/Unstable_Grid2': '/src/mui-grid2-shim.tsx',
    },
  },
})
