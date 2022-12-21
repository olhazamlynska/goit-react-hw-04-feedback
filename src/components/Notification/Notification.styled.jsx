import styled from 'styled-components';

export const NotificationMessage = styled.p`
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.accentColor};
`;
