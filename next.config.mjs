// module.exports = {
//   reactStrictMode: false,
//   images: {
//     domains: ["avatars.githubusercontent.com"],
//   },
//   output: "standalone",
// };

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

export default nextConfig;
