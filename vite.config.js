import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//add a PORT variable to manage deployment
const PORT = process.env.PORT || 3001;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/vite-deploy-demo/',
  server: {
    port: PORT,
    open: true,
  },
});
