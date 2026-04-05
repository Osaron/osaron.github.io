import os
import re

p = r"C:\Github\osaron.github.io\projects\blogs\blogs.html"
with open(p, "r", encoding="utf-8") as f:
    c = f.read()

c = re.sub(r'<section class="blog-section">.*?</section>', '<section id="blogs-list" class="blog-section" aria-label="Blogs list"></section>', c, flags=re.DOTALL)

css_update = '''
    .meta-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
    }
    .actions { display: flex; gap: 10px; }
    .btn-view, .btn-print {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 4px;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 500;
    }
    .btn-view { background: var(--accent); color: var(--bg-color); }
    .btn-print { background: #eee; color: #333; border: 1px solid #ccc; }
    .dark-mode .btn-print { background: #333; color: #eee; border-color: #555; }
    .btn-view:hover { opacity: 0.9; }
    .btn-print:hover { background: #ddd; color: #000; }
  </style>
'''
c = c.replace('  </style>', css_update)

script_update = '''<script>
    fetch("/partials/header.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("header-include").innerHTML = html;
        const script = document.createElement("script");
        script.src = "/darkmode.js";
        document.body.appendChild(script);
      });

    fetch("/partials/footer.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("footer-include").innerHTML = html;
      });

    fetch("/projects/blogs/blogs.json")
      .then(res => res.json())
      .then(blogs => {
        const listEl = document.getElementById("blogs-list");
        listEl.innerHTML = blogs.map(b => {
          let buttons = '';
          if (b.isExternal) {
            buttons = `
              <a class="btn-view" href="${b.link}" target="_blank" rel="noopener noreferrer">
                Read Article <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>`;
          } else {
            buttons = `
              <a class="btn-view" href="/projects/blogs/${b.slug}/">
                <i class="fa-solid fa-arrow-right"></i> View details
              </a>
              <a class="btn-print" href="#" data-src="${b.pdfPath}">
                <i class="fa-regular fa-file-pdf"></i> Download PDF
              </a>`;
          }
          
          return `
            <div class="blog-item">
              <a href="${b.isExternal ? b.link : '/projects/blogs/' + b.slug + '/'}" target="${b.isExternal ? '_blank' : '_self'}" style="flex: 0 0 260px;">
                <img src="${b.cover}" alt="${b.title} cover" style="width: 100%;" />
              </a>
              <div class="blog-info">
                <h3><a href="${b.isExternal ? b.link : '/projects/blogs/' + b.slug + '/'}" style="text-decoration:none; color:inherit;" target="${b.isExternal ? '_blank' : '_self'}">${b.title}</a></h3>
                <p>${b.summary}</p>
                <div class="tags-container" style="margin-bottom: 0.5rem; display: flex; gap: 0.5rem;">
                  ${b.tags.map(t => `<span class="badge">${t}</span>`).join('')}
                </div>
                <div class="meta-actions">
                  <div class="meta">
                    <span><i class="fa-solid fa-calendar-days"></i> ${b.date}</span>
                    <span><i class="fa-solid fa-clock"></i> ${b.readMins} min</span>
                  </div>
                  <div class="actions">
                    ${buttons}
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('');
      });

    const printerFrame = document.createElement('iframe');
    printerFrame.style.position = 'fixed';
    printerFrame.style.right = '0';
    printerFrame.style.bottom = '0';
    printerFrame.style.width = '1px';
    printerFrame.style.height = '1px';
    printerFrame.style.border = '0';
    printerFrame.style.opacity = '0';
    printerFrame.style.pointerEvents = 'none';
    printerFrame.setAttribute('aria-hidden', 'true');
    printerFrame.tabIndex = -1;
    document.body.appendChild(printerFrame);

    document.getElementById('blogs-list').addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-print');
      if (!btn) return;
      e.preventDefault();
      const src = btn.dataset.src;
      if (!src) return;
      printerFrame.onload = () => {
        setTimeout(() => {
          try {
            printerFrame.contentWindow?.focus();
            printerFrame.contentWindow?.print();
          } catch (err) {
            window.open(src, '_blank', 'noopener');
          }
        }, 250);
      };
      printerFrame.src = src;
    });
  </script>'''

c = re.sub(r'<script>.*?</script>', script_update, c, flags=re.DOTALL)
with open(p, "w", encoding="utf-8") as f:
    f.write(c)
