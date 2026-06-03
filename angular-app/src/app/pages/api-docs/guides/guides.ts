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
    { id: 'integration-guide', label: 'Integration Guide', children: [
        { id: 'web-application',    label: 'Web Application' },
        { id: 'mobile-integration', label: 'Mobile Integration' },
        { id: 'server-integration', label: 'Server Integration' },
    ]},
    { id: 'best-practices', label: 'Best Practices', children: [
        { id: 'authentication-security',  label: 'Authentication' },
        { id: 'performance-optimization', label: 'Performance' },
        { id: 'error-handling-patterns',  label: 'Error Handling' },
    ]},
    { id: 'troubleshooting', label: 'Troubleshooting', children: [
        { id: 'common-errors',    label: 'Common Errors' },
        { id: 'debugging-tips',   label: 'Debugging Tips' },
        { id: 'support-resources', label: 'Support Resources' },
    ]},
  ];
}
