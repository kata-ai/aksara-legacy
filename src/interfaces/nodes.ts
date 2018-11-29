export interface GatsbyNode<T> {
  node: T;
}

export interface MenuItem {
  id: string;
  slug: string;
  type: 'link' | 'category';
  title: string;
}

export interface MenuNode {
  title: string;
  tag: string;
  items: MenuItem[];
}
