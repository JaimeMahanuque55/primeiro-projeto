const path = require('path');
// import path from 'node/path'

module.exports = {
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetection: false,
    localePath: path.resolve('./public/locales')
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}