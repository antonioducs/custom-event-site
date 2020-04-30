import React from 'react';

import Drawer from '../../components/Main/Drawer';

const Main = () => {
  const labelsMenu = ['Home', 'Programação', 'Organizadores', 'Inscrição'];

  return <Drawer labelsMenu={labelsMenu} />;
};

export default Main;
