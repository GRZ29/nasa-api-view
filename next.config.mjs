/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
    output: "export",
    distDir: "dist",
    basePath: basePath,
    assetPrefix: assetPrefix,
    images:{
        unoptimized: true,
    }
};

export default nextConfig;
