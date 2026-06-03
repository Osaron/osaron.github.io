import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavGroup {
  label: string;
  route: string;
  children: { label: string; fragment: string }[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  expanded = signal<Set<string>>(new Set(['getting-started']));

  readonly groups: NavGroup[] = [
    {
      label: 'Getting Started', route: 'getting-started',
      children: [
        { label: 'Overview',          fragment: 'overview' },
        { label: 'Authentication',    fragment: 'authentication-summary' },
        { label: 'First request',     fragment: 'first-request' },
        { label: 'Response shape',    fragment: 'response-shape' },
        { label: 'Next steps',        fragment: 'next-steps' },
      ]
    },
    {
      label: 'Authentication', route: 'authentication',
      children: [
        { label: 'API keys',          fragment: 'api-keys' },
        { label: 'Headers',           fragment: 'request-headers' },
        { label: 'Security',          fragment: 'security' },
      ]
    },
    {
      label: 'API Reference', route: 'api-reference',
      children: [
        { label: 'Overview',          fragment: 'overview' },
        { label: 'Content API',       fragment: '' },
        { label: 'Error codes',       fragment: 'error-codes' },
      ]
    },
    {
      label: 'Guides', route: 'guides',
      children: [
        { label: 'Integration guide', fragment: 'integration-guide' },
        { label: 'Best practices',    fragment: 'best-practices' },
        { label: 'Troubleshooting',   fragment: 'troubleshooting' },
      ]
    },
    {
      label: 'Resources', route: 'resources',
      children: [
        { label: 'SDKs',              fragment: 'sdks' },
        { label: 'Examples',          fragment: 'examples' },
        { label: 'FAQ',               fragment: 'faq' },
      ]
    },
  ];

  isExpanded(route: string): boolean {
    return this.expanded().has(route);
  }

  toggle(route: string) {
    const s = new Set(this.expanded());
    s.has(route) ? s.delete(route) : s.add(route);
    this.expanded.set(s);
  }

  expandOnActivate(route: string) {
    const s = new Set(this.expanded());
    s.add(route);
    this.expanded.set(s);
  }
}
