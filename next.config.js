const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  swcMinify:true,
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images:{
      domains:['occ-0-3933-116.1.nflxso.net']
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  }
  
  module.exports = nextConfig