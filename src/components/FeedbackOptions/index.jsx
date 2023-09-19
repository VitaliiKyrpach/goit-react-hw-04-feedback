export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [good, neutral, bad] = options;
  const [setGood, setNeutral, setBad] = onLeaveFeedback;
  return (
    <ul className="buttons">
      <li>
        <button type="button" name="good" onClick={() => setGood(good + 1)}>
          Good
        </button>
      </li>
      <li>
        <button
          type="button"
          name="neutral"
          onClick={() => setNeutral(neutral + 1)}
        >
          Neutral
        </button>
      </li>
      <li>
        <button type="button" name="bad" onClick={() => setBad(bad + 1)}>
          Bad
        </button>
      </li>
    </ul>
  );
};
