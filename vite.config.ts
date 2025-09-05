import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import vike from "vike/plugin";
import { qrcode } from "vite-plugin-qrcode";
import sitemap from "@qalisa/vike-plugin-sitemap";

export default defineConfig({
  plugins: [
    vike(),
    react(),
    tailwindcss(),
    qrcode(),
    sitemap({
      baseUrl: "https://vargtech.fr",
      defaultChangefreq: "monthly",
      robots: false,
    }),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "./assets",
      ),
      "@components": path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "./components",
      ),
      "@hooks": path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "./hooks",
      ),
    },
  },
  build: {
    target: "es2022",
  },
});
