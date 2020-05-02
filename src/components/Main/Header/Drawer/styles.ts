import styled, { css } from 'styled-components';

import colors from '../../../../utils/variables/colors';
import fonts from '../../../../utils/variables/fonts';
import metrics from '../../../../utils/variables/metrics';


export const MenuButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fonts.big}px;
  padding: ${metrics.padding}px;
  font-weight: bold;
  color: ${colors.secondary};
  transition: all 1s;

  &:hover {
    background-color: ${colors.lightGray};
    color: ${colors.primary};
  }
`;

export const HeaderDrawer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  width: 100%;
  height: 150px;
`;

export const BarTop = styled.div`
  position: relative;
  background-color: ${colors.primary};
  width: 30px;
  height: 4px;
  transition: transform 1s;
`;

export const BarMid = styled.div`
  position: relative;
  margin-top: 8px;
  background-color: ${colors.primary};
  width: 30px;
  height: 4px;
  transition: transform 1s;
`;

export const BarBot = styled.div`
  position: relative;
  margin-top: 8px;
  background-color: ${colors.primary};
  width: 30px;
  height: 4px;
  transition: width 1s;
`;

export const DrawerButton = styled.div`
  z-index: 1;
  position: absolute;
  cursor: pointer;
  text-decoration: none;
  border: 0;
  background-color: ${colors.transparent};
  display: flex;
  padding: 20px;
  border-radius: 100%;
  margin: ${metrics.margin}px;
  flex-direction: column;
  top: -20px;
  left: -20px;
  transition: all 1s;


  ${(props: { pressedButton: boolean }) => (props.pressedButton
    ? css`
          ${BarTop} {
            transform: rotate(45deg) translateY(8px) translateX(9px);
          }
          ${BarBot} {
            width: 0%;
          }
          ${BarMid} {
            transform: rotate(-40deg);
          }
          justify-content: flex-end;
          padding: 10px;
        `
    : css``)}
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${colors.lightGray};
  z-index: 0;
  opacity: 0.4;
`;

export const Side = styled.div`
  z-index: 1;
  min-height: 100%;
  width: 300px;
  background-color: ${colors.primary};
  position: absolute;
  transition: transform 1s;

  ${(props: { pressedButton: boolean }) => (props.pressedButton
    ? css`
          transform: translateX(0px);
        `
    : css`
          transform: translateX(-100%);
    `)}
`;
