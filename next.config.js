/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Remove exportPathMap as it's not needed for development
}

module.exports = nextConfig
