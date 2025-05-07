import { defineConfig } from "vite"
import react from '@vite/plugin-react'

export default defineConfig({
    plugins: [react()],
    server:{
        port: 3000,
        proxy:{
            //forwards any /api calls to your fastAPI backend:
            '/api': 'http://localhost:8000'
        }
    }
})