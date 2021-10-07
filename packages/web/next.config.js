/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MAPS_API_KEY: process.env.MAPS_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL}/api/:path*`,
      },
    ];
  },
};
