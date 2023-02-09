/** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//         loader: "akamai",
//         path: "",
//     },
// }

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        loader: "akamai",
        path: "",
        domains: ["cdn.jsdelivr.net"],
    },
}

module.exports = nextConfig
