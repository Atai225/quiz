import React from "react";

const Result = ({ correct, total, restart }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Correct answers - {correct} out of {total}
      </h2>
      <button onClick={restart}>Try again</button>
    </div>
  );
};

export default Result;
