const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'ek21.com' },
      { protocol: 'https', hostname: 'shesay.com' },
    ],
  },
};

export default nextConfig;
