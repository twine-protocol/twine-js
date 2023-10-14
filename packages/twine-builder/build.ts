import dts from 'bun-plugin-dts'

const config = {
  entrypoints: ['./src/index.ts'],
  plugins: [
    dts()
  ],
}

await Promise.all([
  Bun.build({
    ...config,
    target: 'browser',
    outdir: './dist',
  }),
])
