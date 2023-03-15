/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.objkt.media",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
