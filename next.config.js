const withCSS = require('@zeit/next-css')
require('dotenv').config()

module.exports = withCSS({
  env: {
    SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  }
})
