module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ["./_site/**/*.html"]
  },
  theme: {
    fontFamily: {
      'mono': ['"SFMono-Regular"', 'Consolas', '"Liberation Mono"', 'Menlo', 'monospace'],
      'serif': ['"Athelas"', 'Georgia', 'serif']
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
