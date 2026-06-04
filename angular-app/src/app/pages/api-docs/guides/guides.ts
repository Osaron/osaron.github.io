import { Component } from '@angular/core';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-guides',
  standalone: true,
  imports: [],
  templateUrl: './guides.html',
})
export class Guides extends ApiPageBase {
  protected tocItems: TocItem[] = [
    { id: 'testing-overview', label: 'Overview' },
    { id: 'load-testing',     label: 'Load & Stress Testing' },
    { id: 'api-automation',   label: 'API Automation' },
    { id: 'ui-automation',    label: 'UI & E2E Testing' },
    { id: 'mobile-testing',   label: 'Mobile Testing' },
    { id: 'bdd-cucumber',     label: 'BDD & Gherkin' },
    { id: 'languages',        label: 'Languages' },
    { id: 'best-practices',   label: 'Best Practices' },
    { id: 'troubleshooting',  label: 'Troubleshooting', children: [
      { id: 'common-issues',     label: 'Common Issues' },
      { id: 'debugging-tips',    label: 'Debugging Tips' },
      { id: 'support-resources', label: 'Support' },
    ]},
  ];
}
