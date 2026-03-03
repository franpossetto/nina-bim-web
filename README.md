# Nina for Revit

Nina for Revit is a collection of tiny tools designed to speed up your workflow in Autodesk Revit. Most of these commands are already available in Revit but as buried options in secondary windows. Nina brings them to your fingertips via keyboard shortcuts.

## Key Features

- **Dynamic Theming**: Automatically switches between Light and Dark mode based on real-time sunrise and sunset in Morteros, Córdoba (using the [Sunrise-Sunset API](https://api.sunrise-sunset.org/)).
- **SEO Optimized**: Semantic HTML5, Open Graph, Twitter Cards, Schema.org structured data (JSON-LD), canonical URL, and sitemap.
- **Performance Optimized**: Static Site Generation (SSG) via Next.js, PurgeCSS post-build step, native `fetch` API, `font-display: swap`, and `fetchPriority="high"` on the LCP image.
- **Modern UI**: Custom tooltips (react-tooltip) and smooth animations (inline keyframes).

## Development

This project uses [Next.js 14](https://nextjs.org/) with the App Router and static export.

### Available Scripts

#### `npm run dev`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

#### `npm run build`

Builds the app for production in the `out/` folder. Runs a PurgeCSS post-build step automatically to strip unused Bootstrap CSS.

#### `npm start`

Serves the exported `out/` directory with a local static file server. Run `npm run build` first to generate the `out/` folder.

## Deployment

The project outputs a fully static site to the `out/` folder, configured for deployment on **Netlify**. It includes a `public/_redirects` file to handle routing correctly.

## Technologies

- Next.js 14 (App Router, Static Export)
- React 18
- TypeScript
- Bootstrap 5
- React Tooltip
- PurgeCSS (post-build)
