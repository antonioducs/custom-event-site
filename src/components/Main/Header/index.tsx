import React, { useEffect, useState } from 'react';

import { CustomWindow } from '../../../utils/interfaces/CustomWindow';
import Bar from './Bar';
import Drawer from './Drawer';

declare let window: CustomWindow;

const Header = (props: { labelsMenu: Array<string> }) => {
  const { labelsMenu } = props;
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width < 900 ? <Drawer labelsMenu={labelsMenu} /> : <Bar labelsMenu={labelsMenu} />;
};

export default Header;
