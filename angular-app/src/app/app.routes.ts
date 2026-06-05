import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
    children: [
      { path: '', redirectTo: 'user-guides', pathMatch: 'full' },
      {
        path: 'user-guides',
        loadComponent: () => import('./pages/projects/user-guides/user-guides').then(m => m.UserGuides)
      },
      {
        path: 'blogs',
        loadComponent: () => import('./pages/projects/blogs/blogs').then(m => m.Blogs)
      },
      {
        path: 'workflow-diagrams',
        loadComponent: () => import('./pages/projects/workflow-diagrams/workflow-diagrams').then(m => m.WorkflowDiagrams)
      },
      {
        path: 'workflow-diagrams/:slug',
        loadComponent: () => import('./pages/projects/workflow-diagrams/diagram-detail/diagram-detail').then(m => m.DiagramDetail)
      },
      {
        path: 'videos',
        loadComponent: () => import('./pages/projects/videos/videos').then(m => m.Videos)
      },
      {
        path: 'white-papers',
        loadComponent: () => import('./pages/projects/white-papers/white-papers').then(m => m.WhitePapers)
      }
    ]
  },
  {
    path: 'api-docs',
    loadComponent: () => import('./pages/api-docs/api-docs').then(m => m.ApiDocs),
    children: [
      { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
      {
        path: 'getting-started',
        loadComponent: () => import('./pages/api-docs/getting-started/getting-started').then(m => m.GettingStarted)
      },
      {
        path: 'authentication',
        loadComponent: () => import('./pages/api-docs/authentication/authentication').then(m => m.Authentication)
      },
      {
        path: 'api-reference',
        loadComponent: () => import('./pages/api-docs/api-reference/api-reference').then(m => m.ApiReference)
      },
      {
        path: 'content-api',
        loadComponent: () => import('./pages/api-docs/content-api/content-api').then(m => m.ContentApi)
      },
      {
        path: 'guides',
        loadComponent: () => import('./pages/api-docs/guides/guides').then(m => m.Guides)
      },
      {
        path: 'resources',
        loadComponent: () => import('./pages/api-docs/resources/resources').then(m => m.Resources)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
