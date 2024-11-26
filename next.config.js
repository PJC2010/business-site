/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: 'custom',
      domains: ['websitebuckt.s3.amazonaws.com'],
      loaderFile: './imageLoader.js'
    },
    // Add any other Next.js config options you need
  }
  
  module.exports = nextConfig




