import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        react(),
        svgr({ svgrOptions: { icon: true, memo: true } }),
        tsconfigPaths(),
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
