import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/wishlist-space',
    plugins: [react()],
    resolve: {
        alias: {
            "@": "/src",
            "@components": "/src/components",
            "@assets": "/src/assets",
            "@styles": "/src/styles",
        }
    }
})
