import React from 'react';

import { Container, Text, Bar } from './styles';

const Menu = (props: { label: string }) => {
  const { label } = props;

  return (
    <Container>
      <Text href="ref">{label}</Text>
      <Bar />
    </Container>
  );
};

export default Menu;
