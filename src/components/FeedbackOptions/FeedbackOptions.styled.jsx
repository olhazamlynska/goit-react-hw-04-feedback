import styled from 'styled-components';

export const FeedbackUl = styled.ul`
  display: inline-flex;
  justify-content: space-evenly;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[5]}px;
`;

export const FeedbackBtn = styled.button`
  width: 150px;
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[2]}px;
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.accentColor};
  }
`;
