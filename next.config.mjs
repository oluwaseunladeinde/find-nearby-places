/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "maps.googleapis.com",
            }
        ],
    },
};

export default nextConfig;
