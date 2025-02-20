import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import mdPlugin, { Mode } from 'vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), mdPlugin({ mode: [Mode.HTML, Mode.MARKDOWN, Mode.TOC, Mode.REACT] })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    }
  },
})