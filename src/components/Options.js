import React from "react";

const Results = ({ solution, questions, onRetry }) => {
  const correctAnswers = solution.filter((x) => x).length;

  return (
    <div className="results">
      <h2 style={{ marginBottom: 24 }}>Results</h2>
      <p style={{ marginBottom: 24 }}>
        {`You have answered ${correctAnswers} questions correctly. `}
        <span onClick={onRetry}>Click here to retry</span>
      </p>
      <ul>
        {questions.map(({ question }, index) => {
          return (
            <li key={index} data-correct={solution[index]}>
              Q.{index + 1} {question}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Results;
