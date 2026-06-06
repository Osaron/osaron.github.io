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
  protected getTocItems(): TocItem[] {
    return [
      { id: 'sdks', label: this.lang.t('api.toc.sdks'), children: [
          { id: 'official-sdks',       label: this.lang.t('api.toc.official-sdks')    },
          { id: 'community-libraries', label: this.lang.t('api.toc.community-libs')   },
      ]},
      { id: 'examples', label: this.lang.t('api.toc.code-examples'), children: [
          { id: 'basic-examples',       label: this.lang.t('api.toc.basic-examples')       },
          { id: 'advanced-examples',    label: this.lang.t('api.toc.advanced-examples')    },
          { id: 'integration-patterns', label: this.lang.t('api.toc.integration-patterns') },
      ]},
      { id: 'faq', label: this.lang.t('api.toc.faq'), children: [
          { id: 'general-questions',   label: this.lang.t('api.toc.general-questions')  },
          { id: 'technical-questions', label: this.lang.t('api.toc.technical-questions') },
          { id: 'billing-questions',   label: this.lang.t('api.toc.billing-questions')  },
      ]},
    ];
  }

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
