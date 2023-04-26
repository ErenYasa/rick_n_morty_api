import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginBrowserSync from 'vite-plugin-browser-sync';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePluginBrowserSync({
            bs: {
                ui: {
                    port: 8080,
                },
                port: 3033,
                open: false,
                notify: false,
            },
        }),
    ],
    resolve: {
        alias: {
            src: `./src`,
        },
    },
});
