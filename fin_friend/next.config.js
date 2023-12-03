/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/budget",
      destination: "/static/index.html",
    },
  ],
};

module.exports = nextConfig;
