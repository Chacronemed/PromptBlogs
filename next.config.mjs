/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
    missingSuspenseWithCSRBailout: false,  // Add this line
  },
  images: {
    domains: ['lh3.googleusercontent.com'],  // Example domain
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
}

export default nextConfig;
