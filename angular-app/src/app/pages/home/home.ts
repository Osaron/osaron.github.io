import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ProjectTab {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  tags: string;
  route: string;
  preview: string;
}

interface CarouselSlide {
  heading: string;
  items: { img: string; label: string; url: string }[];
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  activeTab = signal('user-guide');
  activeSlide = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  readonly tabs: ProjectTab[] = [
    {
      id: 'user-guide',
      label: 'User Guide',
      icon: '/images/feature projects/user-guide-icon.png',
      title: 'User Guide',
      description: 'Step-by-step documentation designed for end users navigating complex software systems.',
      tags: 'HTML, CSS, Markdown',
      route: '/projects/user-guides',
      preview: '/images/feature projects/preview/user-guide.png',
    },
    {
      id: 'technical-article',
      label: 'Technical Article',
      icon: '/images/feature projects/technical-article-icon.png',
      title: 'Technical Article',
      description: 'In-depth articles covering industry trends, tool evaluations, and engineering best practices.',
      tags: 'Markdown, HTML, CSS',
      route: '/projects/blogs',
      preview: '/images/feature projects/preview/technical-article.png',
    },
    {
      id: 'workflow-diagrams',
      label: 'Workflow Diagram',
      icon: '/images/feature projects/workflow-diagrams-icon.png',
      title: 'Workflow Diagram',
      description: 'Visual diagrams that map complex processes clearly for end-users and developers.',
      tags: 'SVG, Mermaid, Camunda',
      route: '/projects/workflow-diagrams',
      preview: '/images/feature projects/preview/workflow-diagrams.png',
    },
    {
      id: 'instructional-videos',
      label: 'Instructional Video',
      icon: '/images/feature projects/instructional-videos-icon.png',
      title: 'Instructional Video',
      description: 'Concise video content covering onboarding, walkthroughs, and feature demonstrations.',
      tags: 'YouTube, MP4',
      route: '/projects/videos',
      preview: '/images/feature projects/preview/instructional-videos.png',
    },
    {
      id: 'white-papers',
      label: 'White Paper',
      icon: '/images/feature projects/white-papers-icon.png',
      title: 'White Paper',
      description: 'Strategic documents presenting research insights, methodologies, and technical solutions.',
      tags: 'PDF, LaTeX',
      route: '/projects/white-papers',
      preview: '/images/feature projects/preview/white-papers.png',
    },
  ];

  readonly slides: CarouselSlide[] = [
    {
      heading: '🏢 Companies',
      items: [
        { img: '/images/carousel/companies/Carousel_Thales_Group.png',      label: 'Thales Group',        url: 'https://www.thalesgroup.com/en' },
        { img: '/images/carousel/companies/Carousel_Amaris_Consulting.png', label: 'Amaris Consulting',   url: 'https://amaris.com/' },
        { img: '/images/carousel/companies/Carousel_Amazon.png',            label: 'Amazon Web Services', url: 'https://aws.amazon.com/' },
        { img: '/images/carousel/companies/Carousel_Upwork.png',            label: 'Upwork',              url: 'https://www.upwork.com/' },
        { img: '/images/carousel/companies/Carousel_Zters.png',             label: 'Zters',               url: 'https://www.zters.com/' },
      ],
    },
    {
      heading: '🎓 Education',
      items: [
        { img: '/images/carousel/education/Carousel_Datacamp.png',  label: 'Datacamp',  url: 'https://www.datacamp.com/' },
        { img: '/images/carousel/education/Carousel_Google.png',    label: 'Google',    url: 'https://grow.google/' },
        { img: '/images/carousel/education/Carousel_UIS.png',       label: 'UIS',       url: 'https://uis.edu.co/' },
        { img: '/images/carousel/education/Carousel_Uniandes.png',  label: 'Uniandes',  url: 'https://uniandes.edu.co/' },
      ],
    },
    {
      heading: '🏅 Awards',
      items: [
        { img: '/images/carousel/awards/Carousel_100_Job_Success.png', label: '100% Job Success', url: 'https://www.upwork.com/' },
        { img: '/images/carousel/awards/Carousel_Top_Rated.png',       label: 'Top Rated',        url: 'https://www.upwork.com/' },
      ],
    },
  ];

  readonly stackGroups = [
    {
      heading: 'Docs & Writing',
      items: [
        { label: 'Docusaurus',    icon: '/stack/tools/docusaurus_logo.png',    url: 'https://docusaurus.io' },
        { label: 'Markdown',      icon: '/stack/tools/markdown_logo.png',      url: 'https://www.markdownguide.org/' },
        { label: 'Swagger',       icon: '/stack/tools/swagger_logo.png',       url: 'https://swagger.io' },
        { label: 'Microsoft 365', icon: '/stack/tools/microsoft_365_logo.png', url: 'https://www.microsoft.com/en-us/microsoft-365' },
        { label: 'Canva',         icon: '/stack/tools/canva_logo.png',         url: 'https://www.canva.com' },
      ],
    },
    {
      heading: 'Dev Tools',
      items: [
        { label: 'Git',        icon: '/stack/tools/git_logo.png',        url: 'https://git-scm.com/' },
        { label: 'GitHub',     icon: '/stack/tools/github_logo.png',     url: 'https://github.com' },
        { label: 'Postman',    icon: '/stack/tools/postman_logo.png',    url: 'https://www.postman.com/' },
        { label: 'Python',     icon: '/stack/tools/python_logo.png',     url: 'https://www.python.org' },
        { label: 'Javascript', icon: '/stack/tools/javascript_logo.png', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      ],
    },
    {
      heading: 'Platforms',
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
