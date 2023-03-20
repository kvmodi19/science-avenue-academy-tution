/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  // basePath:'/science-avenue-academy-tution',
  publicRuntimeConfig: {
    // Will be available on both server and client
    // staticFolder: isProd ? '/science-avenue-academy-tution' : '',
    staticFolder: '/science-avenue-academy-tution',
  },
  images:{
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


module.exports = nextConfig
