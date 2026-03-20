import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: "/SRR-Technical-Services/",

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react()], // ✅ updated here

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));