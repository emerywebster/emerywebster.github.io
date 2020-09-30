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
    extend: {},
  },
  variants: {},
  plugins: [],
}
