# GitHub Pages Deployment Notes

## How It Works

The Angular app is built and deployed automatically by GitHub Actions. The deploy target is the **`gh-pages` branch** — GitHub Pages is configured to serve that branch at `https://osaron.github.io/`.

```
develop_2026  →  push with "MAIN" in commit  →  Actions builds + tests  →  pushes to gh-pages  →  live site
```

The `angular-cli-ghpages` package handles the push: it takes the build output at `angular-app/dist/portfolio-app/browser/` and force-pushes it to `gh-pages`.

---

## Triggering a Deploy

### Automatic (recommended)

1. Work on any branch (e.g. `develop_2026`).
2. When ready to ship, commit with the keyword **`MAIN`** anywhere in the message:
   ```
   git commit -m "feat: add contact form MAIN"
   git push origin develop_2026
   ```
3. GitHub Actions picks up the push, runs the Angular build and E2E tests, then deploys.

If your latest commit is already pushed but you forgot the keyword, force a deploy with an empty commit:
```
git commit --allow-empty -m "trigger deploy MAIN"
git push origin develop_2026
```

### Manual (from your machine)

Run these from the `angular-app/` directory:

```bash
npm run build          # produces dist/portfolio-app/browser/
npx ng deploy --no-build   # pushes that folder to the gh-pages branch
```

`--no-build` skips rebuilding since you just built. Omit it if you want `ng deploy` to build for you.

---

## GitHub Pages Settings (one-time setup)

For the `gh-pages` branch to be served, the repository must be configured:

1. Go to the repo on GitHub → **Settings** → **Pages**
2. Under **Branch**, select `gh-pages` and folder `/ (root)`
3. Save — GitHub Pages will serve `https://osaron.github.io/` from that branch

> If the source is still set to `main`, the old static site is what visitors see, not the Angular app.

---

## Build Output

`npm run build` (production) outputs to `angular-app/dist/portfolio-app/browser/`:

```
dist/portfolio-app/browser/
├── index.html          ← entry point
├── 404.html            ← SPA redirect hack for GitHub Pages direct-URL access
├── main-<hash>.js      ← bootstrapper chunk
├── chunk-<hash>.js     ← lazy route chunks (one per page)
├── styles-<hash>.css   ← global styles
├── images/             ← copied from public/images/
├── data/               ← JSON data files (diagrams.json, etc.)
└── ...
```

Everything in this folder is what GitHub Pages serves. Nothing else is needed at runtime.

---

## Files That Are No Longer Needed (post-migration cleanup)

The repo root still contains the original vanilla static site files from before the Angular migration. They live on `main` (and `develop_2026`) but are **not** deployed — `gh-pages` only has the Angular build output.

Once you confirm the Angular site is live and working, these can be archived or deleted:

| Path | Reason obsolete |
|---|---|
| `index.html` (root) | Replaced by Angular home page |
| `about/` | Replaced by Angular `/about` route |
| `projects/` | Replaced by Angular `/projects/*` routes |
| `api-documentation/` | Replaced by Angular `/api-docs/*` routes |
| `partials/` | `header.html` / `footer.html` are now Angular components |
| `style.css` | Replaced by Angular scoped SCSS |
| `scripts/update_blogs.py`, `scripts/update_buttons.py` | No longer needed — Angular renders data dynamically |
| `images/` (root) | Originals — most are copied to `angular-app/public/images/` |

> See **Step 16** of `MODERNIZATION_GUIDE.md` for the safe archive procedure.

**Do NOT delete yet:** `tests/`, `playwright.config.js`, and `.github/` — the CI still uses them. Also keep `package.json` / `package-lock.json` at the root (they install root-level Playwright for the legacy-tests job).

---

## CI Jobs Summary

| Job | Runs when | What it does |
|---|---|---|
| `legacy-tests` | Push to `main` only | Runs old Playwright tests against the static files in `main` |
| `angular-build` | Every push to any branch | Installs deps, builds Angular app, runs E2E tests |
| `angular-build` → Deploy step | Push where commit message contains `MAIN` | Runs `ng deploy --no-build` → pushes build to `gh-pages` |
