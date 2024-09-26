import React from 'react';

function Result({ score, totalQuestions }) {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        Your score is {score} out of {totalQuestions}.
      </p>
    </div>
  );
}

export default Result;
