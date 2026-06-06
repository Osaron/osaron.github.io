# API Docs Refinement Guide

> Reference site: https://learn.microsoft.com/en-us/azure/api-management/import-and-publish  
> Current state: image 1 (simple cards, ~60% horizontal space)  
> Target state: Microsoft Learn pattern — dashboard landing + full-width 3-column pages

---

## Priority fixes

### 1. Horizontal width — 60% → 80%

**Problem:** Two places limit the width:

```scss
// api-docs.scss — line ~68
.api-grid {
  max-width: 1480px;         // good, keep this
  padding: 1.5rem 1.25rem;   // too much padding shrinks usable area
}

// api-docs.scss — line ~240
.main-content > .breadcrumb,
.main-content > .api-section {
  max-width: 860px;          // ← this is the main culprit — too narrow
}
```

**Fix:**
```scss
.api-grid {
  padding: 1.5rem 0.5rem 4rem;   // reduce outer padding
}

.main-content > .breadcrumb,
.main-content > .api-section {
  max-width: none;               // remove the cap — let it fill the column
}
```

---

### 2. Landing page — from simple cards to full dashboard

**Current:** `getting-started.component` shows hero cards + mini-cards + code blocks.

**Target (Microsoft Learn pattern):** The landing page shows ALL sections as a browsable grid — title, icon, description, and child links — so users see the full docs map at a glance before drilling in.

**New component to create:** `src/app/pages/api-docs/overview/overview.component`

Add a route for it:
```typescript
// app.routes.ts — inside the api-docs children array
{ path: '', redirectTo: 'overview', pathMatch: 'full' },
{
  path: 'overview',
  loadComponent: () => import('./pages/api-docs/overview/overview').then(m => m.Overview)
},
```

**Template structure:**
```html
<div class="api-overview-page">
  <h1>Portfolio API Documentation</h1>
  <p class="lead">Content API, authentication, guides, and SDK references.</p>

  <div class="section-grid">

    <div class="section-card">
      <div class="section-card-header">
        <i class="fas fa-rocket"></i>
        <span class="section-eyebrow">START HERE</span>
      </div>
      <h2>Getting Started</h2>
      <ul>
        <li><a routerLink="/api-docs/getting-started" fragment="overview">Overview</a></li>
        <li><a routerLink="/api-docs/getting-started" fragment="first-request">First request</a></li>
        <li><a routerLink="/api-docs/getting-started" fragment="response-shape">Response shape</a></li>
      </ul>
    </div>

    <div class="section-card">
      <div class="section-card-header">
        <i class="fas fa-lock"></i>
        <span class="section-eyebrow">SECURITY</span>
      </div>
      <h2>Authentication</h2>
      <ul>
        <li><a routerLink="/api-docs/authentication" fragment="api-keys">API keys</a></li>
        <li><a routerLink="/api-docs/authentication" fragment="request-headers">Request headers</a></li>
        <li><a routerLink="/api-docs/authentication" fragment="security">Best practices</a></li>
      </ul>
    </div>

    <div class="section-card">
      <div class="section-card-header">
        <i class="fas fa-code"></i>
        <span class="section-eyebrow">REFERENCE</span>
      </div>
      <h2>API Reference</h2>
      <ul>
        <li><a routerLink="/api-docs/api-reference" fragment="endpoint-overview">Endpoints</a></li>
        <li><a routerLink="/api-docs/content-api" fragment="list-content">Content API</a></li>
        <li><a routerLink="/api-docs/api-reference" fragment="error-codes">Error codes</a></li>
      </ul>
    </div>

    <div class="section-card">
      <div class="section-card-header">
        <i class="fas fa-map"></i>
        <span class="section-eyebrow">HOW-TO</span>
      </div>
      <h2>Guides</h2>
      <ul>
        <li><a routerLink="/api-docs/guides" fragment="integration-guide">Integration guide</a></li>
        <li><a routerLink="/api-docs/guides" fragment="best-practices">Best practices</a></li>
        <li><a routerLink="/api-docs/guides" fragment="troubleshooting">Troubleshooting</a></li>
      </ul>
    </div>

    <div class="section-card">
      <div class="section-card-header">
        <i class="fas fa-cube"></i>
        <span class="section-eyebrow">TOOLING</span>
      </div>
      <h2>SDKs & Resources</h2>
      <ul>
        <li><a routerLink="/api-docs/resources" fragment="official-sdks">Official SDKs</a></li>
        <li><a routerLink="/api-docs/resources" fragment="examples">Code examples</a></li>
        <li><a routerLink="/api-docs/resources" fragment="faq">FAQ</a></li>
      </ul>
    </div>

  </div>
</div>
```

**SCSS for section-grid:**
```scss
.api-overview-page {
  padding: 2.5rem 2rem 4rem;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
    letter-spacing: -0.03em;
  }

  .lead {
    font-size: 1.05rem;
    color: var(--api-text-soft);
    margin-bottom: 2.5rem;
  }
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.section-card {
  border: 1px solid var(--api-border);
  border-radius: 16px;
  padding: 1.4rem 1.5rem 1.6rem;
  background: var(--api-surface);
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 8px 28px rgba(35, 131, 255, 0.1);
    transform: translateY(-2px);
  }

  h2 {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0.6rem 0 0.9rem;
    color: var(--api-text);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  a {
    font-size: 0.9rem;
    color: var(--api-accent);
    text-decoration: none;

    &:hover { text-decoration: underline; }
  }
}

.section-card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;

  i { color: var(--api-accent); font-size: 1rem; }

  .section-eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--api-text-muted);
    text-transform: uppercase;
  }
}
```

The `overview` page should NOT register TOC items (pass `[]` to `TocService`). The right sidebar stays empty or hidden on the overview page.

---

### 3. Left sidebar — visual improvements

**Problem:** Sidebar merges visually with the background because `--api-surface` and `--api-shell-bg` are too similar in light mode.

**Fix in `api-docs.scss`:**
```scss
.sidebar-content {
  border-left: 3px solid var(--api-accent);   // accent left border like Azure
  border-radius: 0 24px 24px 0;              // only round the right side
}

// Active nav page link — bolder indicator
.nav-page-link.active {
  font-weight: 700;
  border-left: 3px solid var(--api-accent);
  padding-left: calc(0.85rem - 3px);
}
```

---

### 4. Typography improvements

In `api-docs.scss`, increase the base body copy size and improve the h1 size:

```scss
// Current
.main-content h1 { font-size: clamp(2.4rem, 5vw, 3.5rem); }

// Target (less overwhelming, more like MS Learn)
.main-content h1 { font-size: clamp(1.9rem, 3.5vw, 2.6rem); font-weight: 700; }

.main-content p,
.main-content li { font-size: 1rem; line-height: 1.8; }  // up from 0.97rem
```

---

### 5. Code block improvements

Current code blocks are fine but could use line numbers and a language label in the header. Add the language name to `.code-label span` dynamically based on the `language-xxx` class on `<code>`.

---

### 6. Right sidebar (TOC) — make active highlight more visible

```scss
.toc-link.active {
  color: var(--api-accent-strong);
  border-left-color: var(--api-accent-strong);
  font-weight: 600;           // add weight so active item stands out
  background: var(--api-accent-soft);
  border-radius: 0 6px 6px 0;
  padding-right: 0.5rem;
}
```

---

## Implementation order

| # | Task | File(s) |
|---|---|---|
| 1 | Fix horizontal width | `api-docs.scss` |
| 2 | Create Overview dashboard page | `pages/api-docs/overview/` + `app.routes.ts` |
| 3 | Sidebar left-border accent | `api-docs.scss` |
| 4 | Typography tuning | `api-docs.scss` |
| 5 | TOC active highlight | `api-docs.scss` |

---

*Created: 2026-06-04. Branch: `develop_2026`.*
