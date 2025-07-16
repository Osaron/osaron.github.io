# API Documentation

This directory contains a comprehensive, custom API documentation system that seamlessly integrates with the main website's header and footer structure.

## 🚀 Features

- **Seamless Integration**: Uses the same header/footer loading system as the rest of the website
- **Dark Mode Support**: Automatically adapts to the website's dark/light mode toggle
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional Layout**: Modern API documentation design with sidebar navigation
- **Interactive Elements**: Copy-to-clipboard buttons, tabbed code examples, smooth scrolling
- **Syntax Highlighting**: Code examples with proper syntax highlighting using Prism.js
- **Modular Structure**: Easy to extend with additional API sections

## 📁 File Structure

```
api-documentation/
├── index.html          # Main API documentation page
├── content-api.html    # Detailed Content API documentation
├── api-styles.css      # Custom CSS for API documentation
└── README.md          # This file
```

## 🎨 Design Elements

### Sidebar Navigation
- Sticky sidebar with organized sections
- Active page/section highlighting
- Smooth scroll navigation between sections

### Content Sections
- Professional endpoint documentation
- Parameter tables with clear descriptions
- Multiple code example tabs (cURL, JavaScript, Python)
- Response examples with JSON formatting

### Interactive Features
- Copy-to-clipboard functionality for code snippets
- Tabbed code examples for different programming languages
- Hover effects and smooth transitions
- Mobile-responsive navigation

## 🔧 Customization

### Adding New API Sections

1. **Create a new HTML file** (e.g., `user-api.html`)
2. **Copy the structure** from `content-api.html`
3. **Update the navigation** in both main `index.html` and new file
4. **Add your specific endpoints** and documentation

### Modifying Styling

The `api-styles.css` file contains all custom styling:
- CSS variables for easy theming
- Dark mode support through existing website variables
- Responsive breakpoints for mobile/tablet
- Consistent spacing and typography

### Adding New Endpoints

For each endpoint, use this structure:

```html
<div class="endpoint">
  <div class="endpoint-header">
    <span class="method get">GET</span>
    <span class="path">/v1/your-endpoint</span>
    <span class="description">Endpoint description</span>
  </div>
  
  <div class="endpoint-details">
    <!-- Parameters, examples, responses -->
  </div>
</div>
```

## 🎯 Integration

### Header/Footer Loading
The documentation automatically loads the website's header and footer:

```javascript
fetch("/partials/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header-include").innerHTML = html;
    // Dark mode script loading
  });
```

### Dark Mode Support
Uses the same CSS variables as the main website:
- `--bg-color`: Background color
- `--text-color`: Text color  
- `--card-bg`: Card background
- `--accent`: Accent color

## 📱 Responsive Features

- **Desktop**: Full sidebar + content layout
- **Tablet**: Collapsible sidebar
- **Mobile**: Stacked layout with mobile-optimized navigation

## 🛠 Maintenance

### Updating Content
- Edit the HTML files directly for content changes
- Use the existing structure for consistency
- Test dark mode compatibility

### Adding Languages
To add new programming language examples:

1. Add new tab button:
```html
<button class="tab-btn" onclick="showTab('your-lang-id', event)">Your Language</button>
```

2. Add corresponding content:
```html
<div id="your-lang-id" class="code-content">
  <pre><code class="language-your-lang">Your code here</code></pre>
</div>
```

## 🔄 Migration from Docusaurus

This custom solution replaces the previous Docusaurus setup because:
- ✅ Seamless header/footer integration
- ✅ Consistent styling with main website
- ✅ Better dark mode support
- ✅ More control over layout and functionality
- ✅ Easier maintenance and customization

## 📈 Benefits

1. **Consistency**: Matches website design perfectly
2. **Performance**: Lightweight compared to full documentation frameworks
3. **Flexibility**: Easy to customize and extend
4. **Maintenance**: Simple HTML/CSS structure
5. **SEO Friendly**: Standard HTML structure with proper meta tags

## 🚦 Getting Started

1. The main documentation is accessible at `/api-documentation/`
2. Individual API sections can be accessed directly (e.g., `/api-documentation/content-api.html`)
3. All pages automatically include the website header/footer
4. Dark mode toggle works seamlessly across all pages

---

*Last updated: January 2025*