import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParticleBackground } from '../../shared/particle-background/particle-background';
import { LanguageService } from '../../core/services/language.service';

interface ProjectTab {
  id: string;
  icon: string;
  tags: string;
  route: string;
  preview: string;
}

interface CarouselSlide {
  key: string;
  items: { img: string; label: string; url: string }[];
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, ParticleBackground],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  lang       = inject(LanguageService);
  activeTab  = signal('user-guide');
  activeSlide = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  readonly tabs: ProjectTab[] = [
    { id: 'user-guide',          icon: '/images/feature projects/user-guide-icon.png',           tags: 'HTML, CSS, Markdown', route: '/projects/user-guides',       preview: '/images/feature projects/preview/user-guide.png' },
    { id: 'technical-article',   icon: '/images/feature projects/technical-article-icon.png',    tags: 'Markdown, HTML, CSS', route: '/projects/blogs',             preview: '/images/feature projects/preview/technical-article.png' },
    { id: 'workflow-diagrams',   icon: '/images/feature projects/workflow-diagrams-icon.png',    tags: 'SVG, Mermaid, Camunda', route: '/projects/workflow-diagrams', preview: '/images/feature projects/preview/workflow-diagrams.png' },
    { id: 'instructional-videos',icon: '/images/feature projects/instructional-videos-icon.png', tags: 'YouTube, MP4',         route: '/projects/videos',            preview: '/images/feature projects/preview/instructional-videos.png' },
    { id: 'white-papers',        icon: '/images/feature projects/white-papers-icon.png',         tags: 'PDF, LaTeX',           route: '/projects/white-papers',      preview: '/images/feature projects/preview/white-papers.png' },
  ];

  readonly slides: CarouselSlide[] = [
    {
      key: 'slide.companies',
      items: [
        { img: '/images/carousel/companies/Carousel_Thales_Group.png',      label: 'Thales Group',        url: 'https://www.thalesgroup.com/en' },
        { img: '/images/carousel/companies/Carousel_Amaris_Consulting.png', label: 'Amaris Consulting',   url: 'https://amaris.com/' },
        { img: '/images/carousel/companies/Carousel_Amazon.png',            label: 'Amazon Web Services', url: 'https://aws.amazon.com/' },
        { img: '/images/carousel/companies/Carousel_Upwork.png',            label: 'Upwork',              url: 'https://www.upwork.com/' },
        { img: '/images/carousel/companies/Carousel_Zters.png',             label: 'Zters',               url: 'https://www.zters.com/' },
      ],
    },
    {
      key: 'slide.education',
      items: [
        { img: '/images/carousel/education/Carousel_Datacamp.png', label: 'Datacamp', url: 'https://www.datacamp.com/' },
        { img: '/images/carousel/education/Carousel_Google.png',   label: 'Google',   url: 'https://grow.google/' },
        { img: '/images/carousel/education/Carousel_UIS.png',      label: 'UIS',      url: 'https://uis.edu.co/' },
        { img: '/images/carousel/education/Carousel_Uniandes.png', label: 'Uniandes', url: 'https://uniandes.edu.co/' },
      ],
    },
    {
      key: 'slide.awards',
      items: [
        { img: '/images/carousel/awards/Carousel_100_Job_Success.png', label: '100% Job Success', url: 'https://www.upwork.com/' },
        { img: '/images/carousel/awards/Carousel_Top_Rated.png',       label: 'Top Rated',        url: 'https://www.upwork.com/' },
      ],
    },
  ];

  readonly stackGroups = [
    {
      key: 'stack.docs-writing',
      items: [
        { label: 'Docusaurus',    icon: '/stack/tools/docusaurus_logo.png',    url: 'https://docusaurus.io' },
        { label: 'Markdown',      icon: '/stack/tools/markdown_logo.png',      url: 'https://www.markdownguide.org/' },
        { label: 'Swagger',       icon: '/stack/tools/swagger_logo.png',       url: 'https://swagger.io' },
        { label: 'Microsoft 365', icon: '/stack/tools/microsoft_365_logo.png', url: 'https://www.microsoft.com/en-us/microsoft-365' },
        { label: 'Canva',         icon: '/stack/tools/canva_logo.png',         url: 'https://www.canva.com' },
      ],
    },
    {
      key: 'stack.dev-tools',
      items: [
        { label: 'Git',        icon: '/stack/tools/git_logo.png',        url: 'https://git-scm.com/' },
        { label: 'GitHub',     icon: '/stack/tools/github_logo.png',     url: 'https://github.com' },
        { label: 'Postman',    icon: '/stack/tools/postman_logo.png',    url: 'https://www.postman.com/' },
        { label: 'Python',     icon: '/stack/tools/python_logo.png',     url: 'https://www.python.org' },
        { label: 'Javascript', icon: '/stack/tools/javascript_logo.png', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      ],
    },
    {
      key: 'stack.platforms',
      items: [
        { label: 'Confluence', icon: '/stack/tools/confluence_logo.png', url: 'https://www.atlassian.com/software/confluence' },
        { label: 'Jira',       icon: '/stack/tools/jira_logo.png',       url: 'https://www.atlassian.com/software/jira' },
        { label: 'Open AI',    icon: '/stack/tools/open_ai_logo.png',    url: 'https://openai.com' },
        { label: 'Notion',     icon: '/stack/tools/notion_logo.png',     url: 'https://www.notion.so/' },
        { label: 'Moodle',     icon: '/stack/tools/moodle_logo.png',     url: 'https://moodle.org/' },
      ],
    },
  ];

  get activeTabData(): ProjectTab {
    return this.tabs.find(t => t.id === this.activeTab()) ?? this.tabs[0];
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.activeSlide.update(i => (i + 1) % this.slides.length);
    }, 6000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
