import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import istanbul from 'vite-plugin-istanbul';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: [
        'src/**',
        '../../packages/pets-ui/src/**'
      ],
      extension: ['.js', '.ts', '.tsx', '.jsx'],
      requireEnv: false,
    }),
  ],
})
