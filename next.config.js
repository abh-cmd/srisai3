/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = nextConfig
