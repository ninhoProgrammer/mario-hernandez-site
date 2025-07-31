import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://mario-hernandez-site.vercel.app',
    integrations: [sitemap(), tailwind(), vue(), react()],
    vite: {
        build: {
            rollupOptions: {
                output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('vue')) return 'vendor-vue';
                        if (id.includes('react')) return 'vendor-react';
                        if (id.includes('three')) return 'vendor-three';
                        return 'vendor';
                    }
                },
                },
            },
            chunkSizeWarningLimit: 1000, // aumenta el umbral si aceptas chunks grandes
        },
    },
});