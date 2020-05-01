import React from 'react';

import Menu from './Menu';
import { Container } from './styles';

const Bar = (props: { labelsMenu: Array<string> }) => {
  const { labelsMenu } = props;

  return (
    <Container>
      {labelsMenu.length && labelsMenu.map((item, index) => <Menu key={index.toString()} label={item} />)}
    </Container>
  );
};

export default Bar;
