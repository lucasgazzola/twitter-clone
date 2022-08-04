/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com', 'avatars.githubusercontent.com']
  }
};

module.exports = nextConfig;
