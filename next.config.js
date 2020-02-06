const withSass = require('@zeit/next-sass')
module.exports =
  withSass({
    webpack(config, { defaultLoaders, ...options }) {
      defaultLoaders.babel.options.plugins = ["ramda"]

      return config
    },
  })

