import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[5]}px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 40px;
  border-bottom: ${p => p.theme.borders.normal};
`;
