import { defineConfig, mergeConfig } from 'vite';

import { viteBaseConfig } from '../../config/viteBase';

const config = mergeConfig(viteBaseConfig, {
  test: {
    setupFiles: '../../config/setupTest.ts',
  },
});

export default defineConfig({
  ...config,
});
