import Timer from "./Timer";

const Questions = ({ question, dispatch, answer, index,secondsRemaining }) => {
  const hasAnswered = answer !== null;
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, i) => (
          <button
            className={`btn btn-option ${i === answer ? "answer" : ""} ${
              hasAnswered
                ? i === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            disabled={hasAnswered}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
          >
            {option}
          </button>
        ))}
      </div>
      <footer>
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
        {hasAnswered && (
          <button
            className="btn btn-ui"
            onClick={
              index < 14
                ? () => dispatch({ type: "nextQuestion" })
                : () => dispatch({ type: "finish" })
            }
          >
            {index < 14 ? "Next" : "Finish"}
          </button>
        )}
      </footer>
    </div>
  );
};
export default Questions;
