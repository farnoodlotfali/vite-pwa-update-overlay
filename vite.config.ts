import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
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

        // runtimeCaching: [
        //   // =========================
        //   // 1) Fonts
        //   // =========================
        //   {
        //     urlPattern: ({ request }) => request.destination === "font",

        //     handler: "CacheFirst",

        //     options: {
        //       cacheName: "local-fonts",

        //       expiration: {
        //         maxEntries: 30,
        //         maxAgeSeconds: 60 * 60 * 24 * 365,
        //       },

        //       cacheableResponse: {
        //         statuses: [0, 200],
        //       },
        //     },
        //   },

        //   // =========================
        //   // 2) Remote/API Images
        //   // =========================
        //   {
        //     urlPattern: ({ request, url }) => {
        //       return (
        //         request.destination === "image" ||
        //         // image extensions
        //         /\.(png|jpg|jpeg|webp|svg|gif|avif)$/i.test(url.pathname)
        //       );
        //     },

        //     handler: "CacheFirst",

        //     options: {
        //       cacheName: "remote-images",

        //       expiration: {
        //         maxEntries: 300,
        //         maxAgeSeconds: 60 * 60 * 24 * 30,
        //       },

        //       cacheableResponse: {
        //         statuses: [0, 200],
        //       },
        //     },
        //   },

        //   // =========================
        //   // 3) API Calls
        //   // =========================
        //   // {
        //   //   urlPattern: ({ url, request }) =>
        //   //     request.method === "GET" && url.pathname.startsWith("/api/"),

        //   //   handler: "NetworkFirst",

        //   //   options: {
        //   //     cacheName: "api-cache",

        //   //     networkTimeoutSeconds: 3,

        //   //     expiration: {
        //   //       maxEntries: 300,
        //   //       maxAgeSeconds: 60 * 60,
        //   //     },

        //   //     cacheableResponse: {
        //   //       statuses: [0, 200],
        //   //     },
        //   //   },
        //   // },
        // ],
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
