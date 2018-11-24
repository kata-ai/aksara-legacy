import { MenuNode, MenuItem, GatsbyNode } from 'interfaces/nodes';

const getPageById = (sectionList: GatsbyNode<MenuNode>[], templateFile?: string) => {
  if (!templateFile) {
    return undefined;
  }

  const sectionItems = sectionList.map(({ node }) => node.items);
  const flattenedSectionItems: MenuItem[] = [].concat.apply([], sectionItems);

  return flattenedSectionItems.find(item => item.id === templateFile);
};

export default getPageById;
