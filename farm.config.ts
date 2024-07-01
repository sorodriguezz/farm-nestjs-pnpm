import { defineConfig } from '@farmfe/core';
import NestPlugin from 'index.plugin';

const config = defineConfig({
  plugins: [NestPlugin()],
});

export default config;
