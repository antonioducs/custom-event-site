import styled from 'styled-components';


import colors from '../../../utils/variables/colors';
import metrics from '../../../utils/variables/metrics';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.blue};
  align-items: center;
  padding: ${metrics.padding}px;
`;

export const Text = styled.h1`
  color: white;
  padding-left: ${metrics.padding}px;
`;
