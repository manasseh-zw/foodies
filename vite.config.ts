import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  plugins: [
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    // TanStack Router plugin with automatic code splitting
    tanstackRouter({
      autoCodeSplitting: true,
    }),
    tanstackStart(),
    viteReact(),
  ],
  build: {
    // Target modern browsers for smaller bundle
    target: 'esnext',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Suppress large chunk warning for mermaid (used by chat/markdown)
    chunkSizeWarningLimit: 600,
  },
})

export default config


