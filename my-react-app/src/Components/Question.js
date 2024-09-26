import React from 'react';

function Question({ questionData, handleAnswer }) {
  return (
    <div>
      <h2>{questionData.question}</h2>
      <div className="options-container">
        {questionData.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
