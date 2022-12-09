import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  dts: {
    entry: ['./src/index.ts'],
  },
  format: ['cjs', 'esm'],
  splitting: false,
  clean: true,
});
