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
        path: 'videos',
        loadComponent: () => import('./pages/projects/videos/videos').then(m => m.Videos)
      },
      {
        path: 'white-papers',
        loadComponent: () => import('./pages/projects/white-papers/white-papers').then(m => m.WhitePapers)
      },
      {
        path: 'api-docs',
        loadComponent: () => import('./pages/projects/api-docs/api-docs').then(m => m.ApiDocs)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
