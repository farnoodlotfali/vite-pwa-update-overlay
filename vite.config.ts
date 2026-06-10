import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      includeAssets: ["**/*"],
      manifest: {
        short_name: "Vite Pwa Update Overlay",
        name: "Vite Pwa Update Overlay",
        description: "Vite Pwa Update Overlay Description",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/maskable-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/maskable-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
      },
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      workbox: {
        navigateFallback: "index.html",
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,

        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2,woff,ttf,otf}"],

        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        sourcemap: true,
      },
    }),
  ],
  build: {
    outDir: "build",
    cssMinify: true,
  },
  server: {
    port: 3037,
    host: true,
    hmr: { clientPort: 3037 },
    watch: { usePolling: true },
  },
  preview: {
    port: 3000,
    host: true,
  },
});
