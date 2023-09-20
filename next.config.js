/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack5: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
