import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [vike(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@assets": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./assets"),
      "@components": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./components"),
    },
  },
  build: {
    target: "es2022",
  },
});
