/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  basePath:'/science-avenue-academy-tution',
  // assetPrefix: '/science-avenue-academy-tution',
  // images: {
  //   loader: 'default',
  //   unoptimized: true,
  // },
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
