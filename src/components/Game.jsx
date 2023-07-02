import React from "react";

function Game({ questions, question, onClickOption, step }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.options.map((option, index) => (
          <li onClick={() => onClickOption(index)} key={index}>
            {option}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
