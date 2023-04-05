import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    base: './',
    plugins: [react()],
    root: path.resolve(__dirname, 'src'),
    publicDir: path.resolve(__dirname, 'public'),
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                popup: path.resolve(__dirname, 'src/popup.html'),
                options: path.resolve(__dirname, 'src/options.html'),
                background: path.resolve(__dirname, 'src/background/index.ts'),
                content: path.resolve(__dirname, 'src/content/index.ts'),
                contentStyle: path.resolve(__dirname, 'src/content/content.css'),
            },
            output: {
                chunkFileNames: 'js/[name].js',
                entryFileNames: 'js/[name].js',
                assetFileNames: '[ext]/[name].[ext]'
            }
        }
    }
})
