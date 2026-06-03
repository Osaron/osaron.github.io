import { Component, signal } from '@angular/core';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [],
  templateUrl: './resources.html',
})
export class Resources extends ApiPageBase {
  protected tocItems: TocItem[] = [
    { id: 'sdks', label: 'SDKs & Libraries', children: [
        { id: 'official-sdks',       label: 'Official SDKs' },
        { id: 'community-libraries', label: 'Community Libraries' },
    ]},
    { id: 'examples', label: 'Code Examples', children: [
        { id: 'basic-examples',       label: 'Basic Examples' },
        { id: 'advanced-examples',    label: 'Advanced Examples' },
        { id: 'integration-patterns', label: 'Integration Patterns' },
    ]},
    { id: 'faq', label: 'FAQ', children: [
        { id: 'general-questions',  label: 'General Questions' },
        { id: 'technical-questions', label: 'Technical Questions' },
        { id: 'billing-questions',  label: 'Billing & Plans' },
    ]},
  ];

  activeTab = signal('react-example');
  openFaqs = signal<Set<number>>(new Set());

  setTab(id: string) { this.activeTab.set(id); }

  toggleFaq(index: number) {
    const s = new Set(this.openFaqs());
    s.has(index) ? s.delete(index) : s.add(index);
    this.openFaqs.set(s);
  }

  isFaqOpen(index: number): boolean { return this.openFaqs().has(index); }
}
