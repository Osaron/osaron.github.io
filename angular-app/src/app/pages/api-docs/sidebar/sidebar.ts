import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavPage {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly pages: NavPage[] = [
    { label: 'Getting Started', route: 'getting-started' },
    { label: 'Authentication',  route: 'authentication'  },
    { label: 'API Reference',   route: 'api-reference'   },
    { label: 'Content API',     route: 'content-api'     },
    { label: 'Guides',          route: 'guides'          },
    { label: 'Resources',       route: 'resources'       },
  ];

  printPage() {
    window.print();
  }
}
