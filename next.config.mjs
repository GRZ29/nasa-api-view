/** @type {import('next').NextConfig} */
let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true
const nextConfig = {
    output: "export",
    // distDir: "dist",
    images:{
        unoptimized: envImageUnoptimize,
    }
};

export default nextConfig;
