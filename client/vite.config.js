import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@actions': path.resolve(__dirname, './src/redux/actions'),
      '@services': path.resolve(__dirname, './src/services'),
    },
  },
});
