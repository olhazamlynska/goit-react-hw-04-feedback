import PropTypes from 'prop-types';
import {
  StatisticsItem,
  StatisticsList,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem>
          <span> Good:</span>

          <span>{good}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span> Neutral:</span>

          <span>{neutral}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span> Bad:</span>

          <span>{bad}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span> Total:</span>
          <span>{total}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span> Positive feedback:</span>
          <span>{positive}%</span>
        </StatisticsItem>
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
