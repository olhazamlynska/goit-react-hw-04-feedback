import PropTypes from 'prop-types';
import {
  FeedbackUl,
  FeedbackBtn,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackUl>
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackBtn type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </FeedbackBtn>
          </li>
        );
      })}
    </FeedbackUl>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.node.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
