import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-content-api',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content-api.html',
})
export class ContentApi extends ApiPageBase {
  protected tocItems: TocItem[] = [
    { id: 'list-content',   label: 'List Content' },
    { id: 'create-content', label: 'Create Content' },
    { id: 'update-content', label: 'Update Content' },
    { id: 'delete-content', label: 'Delete Content' },
  ];
}
