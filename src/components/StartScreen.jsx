const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to the react Quiz</h2>
      <h3>{numQuestions} Question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startQuiz" })}
      >
        Lets Start
      </button>
    </div>
  );
};
export default StartScreen;
