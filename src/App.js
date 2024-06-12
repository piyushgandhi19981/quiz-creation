import "./styles.css";

import { useState } from "react";

import Questions from "./components/Questions";
import questions from "./constants/questions.json";
import Answers from "./components/Options";

export default function App() {
  const [question, setQuestion] = useState(0);
  const [solution, setSolution] = useState([]);

  const handleSelectAnswer = (isCorrect) => {
    setQuestion(question + 1);
    setSolution([...solution, isCorrect]);
  };

  const handleRetry = () => {
    setQuestion(0);
    setSolution([]);
  };

  return (
    <div className="App">
      <h1>World Quiz</h1>
      {question < questions.length ? (
        <Questions
          handleSelectAnswer={handleSelectAnswer}
          question={questions[question]}
        />
      ) : (
        <Answers
          solution={solution}
          questions={questions}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
}
