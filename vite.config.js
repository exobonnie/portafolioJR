import { defineConfig } from 'vite'

export default defineConfig({
  // Rutas relativas: el dist/ funciona abierto desde cualquier carpeta o subruta
  base: './',
  build: {
    // Minifica el HTML/JS/CSS generados
    minify: true,
    cssMinify: true,
  },
})
