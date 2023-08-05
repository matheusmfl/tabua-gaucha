/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      's3-alpha-sig.figma.com', 'cdn.sanity.io'
    ]
  }
}

module.exports = nextConfig
