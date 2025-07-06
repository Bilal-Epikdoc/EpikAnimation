import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  html: {
    template: './public/index.html',
  },
  //  performance: {
  //   chunkSplit: {
  //     strategy: 'all-in-one',
  //   },
  // },
});
