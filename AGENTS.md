# The Laleh Pin

One static page, in English and Persian, for a remembrance pin. The words are in `src/lib/copy.ts`. When the opening changes, change both languages together.

Run it locally with `npm run dev` (port 4177). The production build is a static export (`output: 'export'` in `next.config.ts`). Do not turn on `cacheComponents`; that setting cannot be used with a static export. `next/image` is unoptimized because GitHub Pages does not run the Next.js image server.

The live site is https://iranfca.github.io/Iranian_Remembrance_badge/. Publish by building with `PAGES_BASE_PATH=/Iranian_Remembrance_badge` and pushing the `out/` directory to the `gh-pages` branch. A push to `main` does not update the site.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
