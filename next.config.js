module.exports =
  {
    webpack(config, { defaultLoaders, ...options }) {
      defaultLoaders.babel.options.plugins = ["ramda"]

      return config
    },
  }

