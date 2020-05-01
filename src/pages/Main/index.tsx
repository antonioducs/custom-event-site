import React from 'react';

import Header from '../../components/Main/Header';

const Main = () => {
  const labelsMenu = ['Home', 'Programação', 'Organizadores', 'Inscrição'];

  return <Header labelsMenu={labelsMenu} />;
};

export default Main;
