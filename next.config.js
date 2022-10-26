/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['img.29cm.co.kr'],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
