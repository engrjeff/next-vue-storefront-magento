/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  basePath: process.env.NEXT_PUBLIC_STORE_PATH,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        hostname: "images-m2.executiveponies.com",
        protocol: "https",
      },
      {
        hostname: "images-m2-dev.executiveponies.com",
        protocol: "https",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/uk/",
        basePath: false,
        permanent: false,
      },
    ];
  },
};
