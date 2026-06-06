# Content Guide — Adding New Content

The Python scripts (`update_blogs.py`, `update_buttons.py`) from the old static site are no longer needed.
Angular reads JSON data directly — add an entry to the right file and the UI updates on the next build.

---

## Adding a Blog / Technical Article

1. Add a new entry to [public/data/blogs.json](public/data/blogs.json):

```json
{
  "title": "Your Article Title",
  "summary": "One or two sentence description.",
  "date": "Month DD, YYYY",
  "readMins": 5,
  "tags": ["TAG1", "TAG2"],
  "cover": "/images/blogs/your_cover_image.png",
  "isExternal": true,
  "link": "https://external-url.com/article"
}
```

For an article hosted locally with a PDF:

```json
{
  "title": "Your Article Title",
  "summary": "One or two sentence description.",
  "date": "Month DD, YYYY",
  "readMins": 5,
  "tags": ["TAG1", "TAG2"],
  "cover": "/images/blogs/your_cover_image.png",
  "isExternal": false,
  "slug": "your-slug",
  "pdfPath": "/projects/blogs/your-slug/YourFile.pdf"
}
```

2. Drop the cover image into `public/images/blogs/`.
3. If the article has a PDF, drop it into `public/projects/blogs/your-slug/`.
4. Run `ng build` — the Blogs page renders the new entry automatically.

---

## Adding a User Guide

1. Add a new entry to [public/data/manuals.json](public/data/manuals.json):

```json
{
  "title": "Your Guide Title",
  "year": 2026,
  "slug": "your-guide-slug",
  "summary": "What this guide covers.",
  "cover": "/projects/user-guides/your-guide-slug/cover.png",
  "readMins": 15,
  "tags": ["Tag1", "Tag2"]
}
```

2. Drop the cover image into `public/projects/user-guides/your-guide-slug/`.
3. Drop the PDF into the same folder as `manual.pdf`.
4. Run `ng build`.

---

## Adding a Tech Stack Icon

1. Drop the logo PNG into `public/stack/tools/`.
2. Add the entry to the `stackGroups` array in [src/app/pages/home/home.ts](src/app/pages/home/home.ts).

---

## Building and deploying

```bash
# Local dev server
cd angular-app
ng serve

# Production build
ng build

# Deploy to GitHub Pages (requires GITHUB_TOKEN)
ng deploy
```
