/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    domains: [
      'cdn-icons-png.flaticon.com',
      'images.unsplash.com'
    ],
    minimumCacheTTL: 3600,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compiler configuration
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // React Strict Mode
  reactStrictMode: true,
  
  // Production-only optimizations
  ...(process.env.NODE_ENV === 'production' && {
    swcMinify: true,
    output: 'standalone',
  }),
  
  // Experimental features
  experimental: {
    // appDir: true, // Only needed if you're not using the app directory by default
    serverActions: {
      enabled: true, // Changed from boolean to object with enabled property
    },
    optimizePackageImports: ['framer-motion'],
  }
};

module.exports = nextConfig;