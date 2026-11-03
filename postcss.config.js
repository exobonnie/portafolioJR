import purgeCSSPlugin from '@fullhuman/postcss-purgecss'

const aplicarPurga =
  process.env.NODE_ENV === 'production' && !process.argv.includes('sinpurga')

export default {
  plugins: [
    aplicarPurga &&
      purgeCSSPlugin({
        content: ['./index.html'],
      }),
  ].filter(Boolean),
}
