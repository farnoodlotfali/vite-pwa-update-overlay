import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
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
