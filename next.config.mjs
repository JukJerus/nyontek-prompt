/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [{
      hostname: 'lh3.googleusercontent.com',
    }]
  },
  experimental: {
    esmExternals: true,
    missingSuspenseWithCSRBailout: false,
  }
};

export default nextConfig;