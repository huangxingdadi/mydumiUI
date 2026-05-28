import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  publicPath: './',
  runtimePublicPath: true,
  themeConfig: {
    name: 'mycustomUI',
  },
});
