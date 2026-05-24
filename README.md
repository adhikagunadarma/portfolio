# Adhika Gunadarma Portfolio

Modernized portfolio site built with Next.js and prepared for static deployment to GitHub Pages under `/portfolio`.

## Stack

- Next.js 15
- React 19
- TypeScript
- CSS with a custom single-page layout
- GitHub Actions for CI/CD to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
DEPLOY_TARGET=gh-pages npm run build
```

The exported static site will be generated in `out/`.
