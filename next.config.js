/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    // 아래를 추가합니다.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  images: {
    domains: ['user-images.githubusercontent.com', 'localhost', 'img.shields.io'],
  },
};

module.exports = nextConfig;
