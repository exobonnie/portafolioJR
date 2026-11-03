import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portafolio/',
  build: {
    minify: true,
    cssMinify: true,
  },
})