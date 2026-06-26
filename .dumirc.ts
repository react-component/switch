import { defineConfig } from 'dumi';
import path from 'path';

const basePath = process.env.GH_PAGES ? '/switch/' : '/';
const publicPath = process.env.GH_PAGES ? '/switch/' : '/';

export default defineConfig({
  alias: {
    '@rc-component/switch$': path.resolve('src'),
    '@rc-component/switch/es': path.resolve('src'),
    '@rc-component/switch/assets': path.resolve('assets'),
  },
  mfsu: false,
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Switch',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  outputPath: 'docs-dist',
  base: basePath,
  publicPath,
});
