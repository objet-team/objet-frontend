/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com', 'objet-bucket.s3.us-east-2.amazonaws.com'],
  },

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
