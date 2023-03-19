/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  basePath: 'https://kvmodi19.github.io/science-avenue-academy-tution',
  assetPrefix: '/science-avenue-academy-tution/',
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


module.exports = nextConfig
