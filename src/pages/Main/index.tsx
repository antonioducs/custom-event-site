import React from 'react';

import Carousel from '../../components/Main/Carousel';
import Header from '../../components/Main/Header';

const Main = () => {
  const labelsMenu = ['Home', 'Programação', 'Organizadores', 'Inscrição'];
  const imgCarousel = [
    'https://passevip.com.br/wp-content/uploads/2018/04/2018-04-23-como-aumentar-o-alcance-e-atrair-publico-para-seu-evento.jpg',
    'https://blog.egestor.com.br/wp-content/uploads/2017/04/evento.jpeg',
    'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg',
  ];

  return (
    <>
      <Header labelsMenu={labelsMenu} />
      <Carousel imgSource={imgCarousel} />
    </>
  );
};

export default Main;
