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
  };
  frontmatter: {
    title: string;
    subtitle: string;
    category: string;
    version: string;
    header_image: {
      childImageSharp: {
        fluid: {
          [key: string]: any;
        };
      };
    };
    date: string;
    date_formatted: string;
  };
  excerpt: string;
  htmlAst: object;
}
