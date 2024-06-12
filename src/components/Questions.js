import React from "react";

const Questions = ({ question, handleSelectAnswer }) => {
  const { question: q, answerOptions } = question;

  return (
    <div>
      <h2>{q}</h2>
      <div className="option-container">
        {answerOptions.map((option, index) => (
          <button
            onClick={() => handleSelectAnswer(option.isCorrect)}
            key={index}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
