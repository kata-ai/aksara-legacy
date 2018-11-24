export interface SiteAuthor {
  name: string;
  url: string;
  email: string;
}

export interface SiteMetadata {
  title: string;
  sidebarTitle: string;
  description: string;
  siteUrl: string;
  keywords: string;
  author: SiteAuthor;
}

export interface UpdatePost {
  id: string;
  fields: {
    slug: string;
    layout: string;
    date: string;
  };
  frontmatter: {
    title: string;
    category: string;
    version: string;
  };
  html: string;
}

export interface GatsbyNode<T> {
  node: T;
}
