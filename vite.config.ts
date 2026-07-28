import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const preloadStylesheets = () => ({
  name: 'preload-stylesheets',
  enforce: 'post' as const,
  transformIndexHtml(html: string) {
    return html.replace(
      /<link[^>]*rel="stylesheet"[^>]*href="([^"]+\.css)"[^>]*>/g,
      '<link rel="preload" as="style" href="$1" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$1"></noscript>',
    );
  },
});

export default defineConfig(({ command }) => ({
    plugins: [react(), tailwindcss(), preloadStylesheets()],
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  })
);