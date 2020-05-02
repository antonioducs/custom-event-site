import React, { useState } from 'react';

import {
  Container, ArrowLeft, ArrowRight, ContainerArrow, ContainerBottom, StaticCircle, ImgCarousel,
} from './styles';

const Carousel = (props: { imgSource: Array<string> }) => {
  const { imgSource } = props;
  const [indexSelected, setIndexSelected] = useState(0);

  const positionImg = (index: number) => {
    if (index === indexSelected) return 0;
    if (index < indexSelected) return -100;

    return 100;
  };

  const handleArrow = (type: string) => {
    if (type === 'back') {
      if (indexSelected - 1 >= 0) setIndexSelected(indexSelected - 1);
      else setIndexSelected(imgSource.length - 1);
    } else if (type === 'go') {
      if (indexSelected + 1 < imgSource.length) setIndexSelected(indexSelected + 1);
      else setIndexSelected(0);
    }
  };

  return (
    <Container>
      {imgSource.length
        && imgSource.map((item, index) => <ImgCarousel src={item} transformValue={positionImg(index)} />)}
      <ContainerArrow>
        <ArrowLeft onClick={() => handleArrow('back')} />
        <ArrowRight onClick={() => handleArrow('go')} />
      </ContainerArrow>
      <ContainerBottom>
        {imgSource.length
          && imgSource.map((item, index) => (
            <StaticCircle
              key={index.toString()}
              isSelected={index === indexSelected}
              onClick={() => setIndexSelected(index)}
            />
          ))}
      </ContainerBottom>
    </Container>
  );
};

export default Carousel;
