import React, { useState } from 'react';

import {
  BarTop, BarMid, BarBot, Side, DrawerButton, MenuButton, HeaderDrawer, Backdrop,
} from './styles';

const Drawer = (props: { labelsMenu: Array<string> }) => {
  const { labelsMenu } = props;
  const [pressedMenu, setPressedMenu] = useState(false);

  return (
    <>
      <Side pressedButton={pressedMenu}>
        <HeaderDrawer>
          <h1>Header</h1>
        </HeaderDrawer>
        {labelsMenu.length && labelsMenu.map((item, index) => <MenuButton href="ref" key={index.toString()}>{item}</MenuButton>)}
      </Side>
      <DrawerButton pressedButton={pressedMenu} onClick={() => setPressedMenu(!pressedMenu)}>
        <BarTop />
        <BarMid />
        <BarBot />
      </DrawerButton>
      {pressedMenu ? <Backdrop onClick={() => setPressedMenu(false)} /> : null}
    </>
  );
};

export default Drawer;
