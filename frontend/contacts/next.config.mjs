/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
  // Base path for the microfrontend
  basePath: '/dashboard/contacts-mfe',
  assetPrefix: '/dashboard/contacts-mfe',
};

export default nextConfig;
