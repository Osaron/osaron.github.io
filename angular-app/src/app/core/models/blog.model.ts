export interface Blog {
  title: string;
  summary: string;
  date: string;
  readMins: number;
  tags: string[];
  cover: string;
  isExternal: boolean;
  link?: string;
  slug?: string;
  pdfPath?: string;
}
