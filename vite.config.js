import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' keeps asset paths relative so the built site can be served
// from any static host (HashRouter + relative base = drop-in deployable).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
