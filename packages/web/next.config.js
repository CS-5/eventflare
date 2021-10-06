/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MAPS_API_KEY: process.env.MAPS_API_KEY,
  },
};
