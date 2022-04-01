import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            // with options
            "/api": {
                target: "http://127.0.0.1:5600/v1",
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, "")
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
})
