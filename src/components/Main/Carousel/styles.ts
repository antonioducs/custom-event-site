import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import styled, { css } from 'styled-components';

import { CustomWindow } from '../../../utils/interfaces/CustomWindow';
import colors from '../../../utils/variables/colors';
import metrics from '../../../utils/variables/metrics';

declare let window: CustomWindow;

export const Container = styled.div`
  display: flex;
  padding: ${metrics.padding}px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${colors.transparent};
`;

export const ArrowLeft = styled(ArrowBackIos)`
  color: ${colors.secondary};
  cursor: pointer;

  :hover {
    color: ${colors.primary};
  }
`;

export const ArrowRight = styled(ArrowForwardIos)`
  color: ${colors.secondary};
  cursor: pointer;

  :hover {
    color: ${colors.primary};
  }
`;

export const ContainerArrow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ContainerBottom = styled.div`
  display: flex;
  width: 100%;
  margin-left: ${-metrics.padding}px;
  justify-content: center;
  position: absolute;
  bottom: 100px;
`;

export const StaticCircle = styled.div`
  cursor: pointer;
  margin: 8px;
  background-color: ${colors.lightGray};
  width: 10px;
  height: 10px;
  border-radius: 10px;
  transition: all 1s;

  ${(props: { isSelected: boolean }) => (props.isSelected
    ? css`
          background-color: ${colors.primary};
          -webkit-box-shadow: 0px -1px 38px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px -1px 38px 0px rgba(0, 0, 0, 0.75);
          box-shadow: 0px -1px 38px 0px rgba(0, 0, 0, 0.75);
        `
    : css``)}
`;

export const ImgCarousel = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  transform: ${(props: { transformValue: number }) => `translateX(${props.transformValue}%)`};
  top: 0;
  left: 0;
  transition: all 1s;
`;
