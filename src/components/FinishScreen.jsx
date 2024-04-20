const FinishScreen = ({ dispatch, points, totalPoints, highScore }) => {
  let emoji;
  if (points === 0) emoji = "🤦‍♂️";
  if (points < 130 && points > 0) emoji = "🤨";
  if (points > 130 && points < totalPoints) emoji = "🎉";
  if (points === totalPoints) emoji = "🥇";
  return (
    <>
      <div className="result">
        <span>{emoji}</span> You have scored <strong>{points}</strong> out of{" "}
        {totalPoints} {`(${Math.round((points / totalPoints) * 100)}%)`}
      </div>
      <p className="highscore">{`(Highscore: ${highScore} points)`}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
};
export default FinishScreen;
