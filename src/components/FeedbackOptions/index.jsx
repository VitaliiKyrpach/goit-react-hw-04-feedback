export const FeedbackOptions = ({ onLeaveFeedback }) => {
  const [setGood, setNeutral, setBad] = onLeaveFeedback;
  return (
    <ul className="buttons">
      <li>
        <button
          type="button"
          name="good"
          onClick={() => setGood(prev => prev + 1)}
        >
          Good
        </button>
      </li>
      <li>
        <button
          type="button"
          name="neutral"
          onClick={() => setNeutral(prev => prev + 1)}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          name="bad"
          onClick={() => setBad(prev => prev + 1)}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
