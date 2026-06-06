export interface DiagramStep {
  title: string;
  description: string;
}

export interface Diagram {
  title: string;
  summary: string;
  slug: string;
  date: string;
  tags: string[];
  cover: string;
  tool: string;
  isExternal: boolean;
  link?: string;
  pdfPath?: string;
  problem?: string;
  steps?: DiagramStep[];
}
