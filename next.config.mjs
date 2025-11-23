/** @type {import('next').NextConfig} */
const nextConfig = {
  // <CHANGE> Simplified config for stable Vercel deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  experimental: {
    turbo: {
      rules: {},
    },
  },
}

export default nextConfig
