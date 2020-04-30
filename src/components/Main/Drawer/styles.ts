import styled, { css } from 'styled-components';

import colors from '../../../utils/variables/colors';
import fonts from '../../../utils/variables/fonts';
import metrics from '../../../utils/variables/metrics';


export const MenuButton = styled.div`
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
  width: 50px;
  height: 6px;
  transition: transform 1s;
`;

export const BarMid = styled.div`
  position: relative;
  margin-top: 10px;
  background-color: ${colors.primary};
  width: 50px;
  height: 6px;
  transition: transform 1s;
`;

export const BarBot = styled.div`
  position: relative;
  margin-top: 10px;
  background-color: ${colors.primary};
  width: 50px;
  height: 6px;
  transition: width 1s;
`;

export const DrawerButton = styled.button`
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

  &:hover {
    background-color: ${colors.lightGray};
  }

  ${(props: { pressedButton: boolean }) => (props.pressedButton
    ? css`
          ${BarTop} {
            transform: rotate(45deg) translateY(11px) translateX(12px);
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

export const Side = styled.div`
  height: 100%;
  width: 30%;
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
