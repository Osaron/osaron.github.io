import os
import json

root = r"C:\Github\osaron.github.io\projects\blogs"

with open(os.path.join(root, "blogs.json"), "r", encoding="utf-8") as f:
    blogs = json.load(f)

for b in blogs:
    link = b.get("link", "")
    if "Everense" in link and "How Large Language Models Understand Your Writing" in b["title"]:
        b["slug"] = "everense"
        b["pdfPath"] = "/projects/blogs/everense/How Large Language Models Understand Your Writing-v1.0.pdf"
    if "Chem" in link or "Techspray" in link or "PCE" in b["title"]:
        b["slug"] = "techspray"
        b["pdfPath"] = "/projects/blogs/techspray/Trichloroethylene And Perchloroethylene-v1.0.pdf"

with open(os.path.join(root, "blogs.json"), "w", encoding="utf-8") as f:
    json.dump(blogs, f, indent=2)

html_path = os.path.join(root, "blogs.html")
with open(html_path, "r", encoding="utf-8") as f:
    c = f.read()

old_logic = '''          let buttons = '';
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
          }'''

new_logic = '''          let buttons = '';
          if (b.isExternal) {
            buttons += `
              <a class="btn-view" href="${b.link}" target="_blank" rel="noopener noreferrer">
                Read Article <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>`;
          }
          if (b.slug) {
            if (!b.isExternal) {
              buttons += `<a class="btn-view" href="/projects/blogs/${b.slug}/">
                <i class="fa-solid fa-arrow-right"></i> View details
              </a>`;
            } else {
              buttons += `
              <a class="btn-view" href="/projects/blogs/${b.slug}/" style="background:#4a5568;">
                <i class="fa-solid fa-file-pdf"></i> View PDF
              </a>`;
            }
            buttons += `
              <a class="btn-print" href="#" data-src="${b.pdfPath}">
                <i class="fa-solid fa-download"></i> Download PDF
              </a>`;
          }'''

c = c.replace(old_logic, new_logic)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(c)

print("success")
