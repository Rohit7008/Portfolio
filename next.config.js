/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  webpack: (config, { dev, isServer }) => {
    // Only enable source maps in development
    if (!dev) {
      config.devtool = false;
    }
    return config;
  },
};

module.exports = nextConfig;