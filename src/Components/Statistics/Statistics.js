import React from 'react';
import { StatisticsBtn, StaticticsList } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, setValue }) => {
  let total = good + neutral + bad;
  let positiveFeedback = Math.round((good / total) * 100);
  return (
    <section>
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
      {good > 0 ? (
        <StaticticsList>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>
            Positive feedback: {positiveFeedback ? positiveFeedback : '0'}%
          </li>
        </StaticticsList>
      ) : <p>No feedback given</p> && neutral > 0 ? (
        <StaticticsList>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>
            Positive feedback: {positiveFeedback ? positiveFeedback : '0'}%
          </li>
        </StaticticsList>
      ) : <p>No feedback given</p> && bad > 0 ? (
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
    </section>
  );
};

export default Statistics;
