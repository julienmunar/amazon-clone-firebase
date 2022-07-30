/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.cdnlogo.com','images-na.ssl-images-amazon.com',"images-eu.ssl-images-amazon.com",  'fakestoreapi.com','logosarchive.com','m.media-amazon.com','www.junglescout.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env:{
    stripe_public_key:process.env.STRIPE_PUBLIC_KEY
  },
  api:{
    bodyParser:false,
    externalResolver: true
}
}

module.exports = nextConfig
