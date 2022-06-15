/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
    experimental: {
        images: {
            layoutRaw: true
        }
    },
    reactStrictMode: true,
    // Rest of the config
};

// module.exports = nextConfig
