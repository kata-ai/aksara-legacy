import React from 'react';

import HomeLayout from '../layouts/homeLayout';

const HomeTemplate: React.SFC = ({ children }) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default HomeTemplate;
