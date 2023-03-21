/** @type {import('next').NextConfig} */
const {
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD

  const env = {
    reactStrictMode: true,
    basePath: isProd ? '/science-avenue-academy-tution' : '',
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: isProd ? '/science-avenue-academy-tution' : '',
    },
    images: {
      unoptimized: true
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.plugins.push(
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        }));
      return config;

    }
  }

  // next.config.js object
  return {
    ...env,
  }
}