import styled from 'styled-components';

import colors from '../../../../../utils/variables/colors';
import fonts from '../../../../../utils/variables/fonts';
import metrics from '../../../../../utils/variables/metrics';

export const Bar = styled.div`
  width: 0%;
  height: 4px;
  background-color: ${colors.secondary};
  transition: width 0.4s;
`;

export const Text = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.secondary};
  font-size: ${fonts.extrabig}px;
  transition: font-size 0.4s;
`;

export const Container = styled.div`
  padding: 0px ${metrics.padding}px 0px ${metrics.padding}px ;
  :hover {
    ${Bar} {
      width: 100%;
    }
    ${Text} {
      font-size: 20px;
    }
  }
`;
