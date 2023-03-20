/** @type {import('next').NextConfig} */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environment variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD

  console.log(`isDev:${isDev}  isProd:${isProd} `)

  const env = {
    reactStrictMode: true,
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
    env,
  }
}