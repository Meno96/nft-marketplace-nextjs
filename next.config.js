/** @type {import('next').NextConfig} */

const withOptimizedImages = require("next-optimized-images")
module.exports = withOptimizedImages({
    reactStrictMode: true,
    optimizeImages: true,
    optimizeImagesInDev: false,
    responsive: {
        adapter: require("responsive-loader/sharp"),
    },
})

// module.exports = {
//     reactStrictMode: true,
//     webpack: (config, options) => {
//         // Use file-loader or url-loader for images
//         config.module.rules.push({
//             test: /\.(png|jpe?g|gif)$/i,
//             use: [
//                 {
//                     loader: "file-loader",
//                 },
//             ],
//         })

//         // Use Babel, css-loader, and style-loader for CSS
//         config.module.rules.push({
//             test: /\.css$/,
//             use: [
//                 {
//                     loader: "babel-loader",
//                 },
//                 "css-loader",
//                 "style-loader",
//             ],
//         })

//         return config
//     },
// }
