import React from 'react';
import { StatisticsBtn, StaticticsList, SectionBox } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, setValue }) => {
  let total = good + neutral + bad;
  let positiveFeedback = Math.round((good / total) * 100);
  return (
    <SectionBox>
      <h2>Please leave feedback</h2>

      <StatisticsBtn className="btn-good" onClick={setValue} name="good">
        Good
      </StatisticsBtn>
      <StatisticsBtn onClick={setValue} name="neutral">
        Neutral
      </StatisticsBtn>
      <StatisticsBtn onClick={setValue} name="bad">
        Bad
      </StatisticsBtn>

      <h2>Statistics</h2>
      {total ? (
        <StaticticsList>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>
            Positive feedback: {positiveFeedback ? positiveFeedback : '0'}%
          </li>
        </StaticticsList>
      ) : (
        <p>No feedback given</p>
      )}
    </SectionBox>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired
};
