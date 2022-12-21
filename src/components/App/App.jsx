import React, { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from '../Notification/Notification';
import { Box } from 'components/Box/Box';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const totalValues = Number(good + neutral + bad);

    return totalValues;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <Box as="main">
      <Box
        as="div"
        maxWidth={1250}
        pl={20}
        pr={20}
        ml={'auto'}
        mr={'auto'}
      ></Box>

      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
}
