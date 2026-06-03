import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BlogService } from '../../../core/services/blog.service';
import { Blog } from '../../../core/models/blog.model';

@Component({
  selector: 'app-blogs',
  imports: [AsyncPipe],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
})
export class Blogs {
  private blogService = inject(BlogService);
  blogs$ = this.blogService.getAll();

  openLink(blog: Blog) {
    if (blog.isExternal && blog.link) {
      window.open(blog.link, '_blank', 'noopener');
    } else if (blog.pdfPath) {
      window.open(blog.pdfPath, '_blank', 'noopener');
    }
  }

  downloadPdf(blog: Blog, event: MouseEvent) {
    event.stopPropagation();
    if (blog.pdfPath) {
      window.open(blog.pdfPath, '_blank', 'noopener');
    }
  }
}
