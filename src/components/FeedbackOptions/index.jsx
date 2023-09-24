export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="buttons">
      {options &&
        options.map(option => {
          return (
            <li key={option}>
              <button
                type="button"
                name={option}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
    </ul>
  );
};
