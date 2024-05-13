/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@repo/ui'],
  images: {
    remotePatterns: [
      {
        hostname: 'images-m2.executiveponies.com',
        protocol: 'https',
      },
      {
        hostname: 'images-m2-dev.executiveponies.com',
        protocol: 'https',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
