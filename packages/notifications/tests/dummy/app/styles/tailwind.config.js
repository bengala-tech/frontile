/* eslint-disable node/no-extraneous-require */

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('@frontile/core/tailwind'),
    require('@frontile/notifications/tailwind'),
    require('@frontile/forms/tailwind')
  ]
};
