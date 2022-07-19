/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.cdnlogo.com','images-na.ssl-images-amazon.com',"images-eu.ssl-images-amazon.com",  'fakestoreapi.com','logosarchive.com','m.media-amazon.com' ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
