/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    domains: [
      'cdn-icons-png.flaticon.com',
      'images.unsplash.com'
    ],
    minimumCacheTTL: 3600, // Cache optimized images for 1 hour
    formats: ['image/webp'], // Serve modern webp format when possible
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Default device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Default image sizes
  },
  
  // Compiler configuration
  compiler: {
    styledComponents: true, // Required for styled-components SSR
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.log in production
  },
  
  // React Strict Mode (recommended)
  reactStrictMode: true,
  
  // Production-only optimizations
  ...(process.env.NODE_ENV === 'production' && {
    swcMinify: true, // Use SWC minifier (faster than Terser)
    output: 'standalone', // For Docker deployments
  }),
  
  // Enable experimental features if needed
  experimental: {
    // appDir: true, // Already enabled by default in Next.js 13+
    serverActions: true, // If using Server Actions
    optimizePackageImports: ['framer-motion'], // Optimize specific packages
  }
};

module.exports = nextConfig;