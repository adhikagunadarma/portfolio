import path from 'node:path';
import { fileURLToPath } from 'node:url';

const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';
const basePath = isGithubPages ? '/portfolio' : '';
const dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  turbopack: {
    root: dirname,
  },
};

export default nextConfig;
