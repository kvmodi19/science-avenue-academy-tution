/** @type {import('next').NextConfig} */
const {
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = (phase) => {
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD

  const env = {
    reactStrictMode: true,
    assetPrefix,
    basePath,
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