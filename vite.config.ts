import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import wyw from "@wyw-in-js/vite";

export default defineConfig({
  plugins: [
    react(),
    wyw()
  ]
})
