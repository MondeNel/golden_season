import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load .env.local manually
dotenv.config({ path: '.env.local' });

const anthropicKey = process.env.VITE_ANTHROPIC_API_KEY;

if (!anthropicKey) {
  console.warn('⚠️  VITE_ANTHROPIC_API_KEY not found — AI chatbot will not work.');
}

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/anthropic': {
        target: 'https://api.anthropic.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/anthropic/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('x-api-key', anthropicKey || '');
            proxyReq.setHeader('anthropic-version', '2023-06-01');
          });
        },
      },
    },
  },
});