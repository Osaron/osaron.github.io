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
      // Quick Start landing (default)
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/api-docs/quick-start/quick-start').then(m => m.QuickStart)
      },
      // Quote API pages
      {
        path: 'quote-api/introduction',
        loadComponent: () => import('./pages/api-docs/getting-started/getting-started').then(m => m.GettingStarted)
      },
      {
        path: 'quote-api/authentication',
        loadComponent: () => import('./pages/api-docs/authentication/authentication').then(m => m.Authentication)
      },
      {
        path: 'quote-api/api-reference',
        loadComponent: () => import('./pages/api-docs/api-reference/api-reference').then(m => m.ApiReference)
      },
      {
        path: 'quote-api/content-api',
        loadComponent: () => import('./pages/api-docs/content-api/content-api').then(m => m.ContentApi)
      },
      {
        path: 'quote-api/demo',
        loadComponent: () => import('./pages/api-docs/resources/resources').then(m => m.Resources)
      },
      // Meal DB pages
      {
        path: 'meal-db/introduction',
        loadComponent: () => import('./pages/api-docs/meal-db/introduction/introduction').then(m => m.MealDbIntroduction)
      },
      {
        path: 'meal-db/authentication',
        loadComponent: () => import('./pages/api-docs/meal-db/authentication/authentication').then(m => m.MealDbAuthentication)
      },
      {
        path: 'meal-db/api-reference',
        loadComponent: () => import('./pages/api-docs/meal-db/api-reference/api-reference').then(m => m.MealDbApiReference)
      },
      {
        path: 'meal-db/content-api',
        loadComponent: () => import('./pages/api-docs/meal-db/content-api/content-api').then(m => m.MealDbContentApi)
      },
      {
        path: 'meal-db/demo',
        loadComponent: () => import('./pages/api-docs/meal-db/demo/demo').then(m => m.MealDbDemo)
      },
      // Top-level pages
      {
        path: 'guides',
        loadComponent: () => import('./pages/api-docs/guides/guides').then(m => m.Guides)
      },
      {
        path: 'faq',
        loadComponent: () => import('./pages/api-docs/faq/faq').then(m => m.Faq)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
