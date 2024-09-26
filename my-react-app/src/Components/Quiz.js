import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import questions_pool from './questions_pool';
import '../Quiz.css';


const getRandomQuestions = (questions_pool, numOfQuestions) => {
    const shuffled = [...questions_pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numOfQuestions); // Selects `numOfQuestions` random questions
};

function Quiz() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds for each question

  useEffect(() => {
    const randomQuestions = getRandomQuestions(questions_pool, 10);
    setSelectedQuestions(randomQuestions);
  }, []); 

  const handleAnswer = (selectedOption) => {
    if (selectedOption === selectedQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(10); // Reset timer for next question
    } else {
      setQuizFinished(true);
    }
  };

    useEffect(() => {
        if (timeLeft > 0) {
          const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
          }, 1000);
          return () => clearTimeout(timer); // Clear the timeout if the component is unmounted or the question changes
        } else {
          // Automatically move to the next question when the timer reaches zero
          moveToNextQuestion();
        }
    }, [timeLeft]);

 
    return (
        <div>
          {!quizFinished && selectedQuestions.length > 0 ? (
            <>
              <div className="timer">Time Left: {timeLeft} seconds</div>
              <div className="question-container">
                <Question
                  questionData={selectedQuestions[currentQuestion]}
                  handleAnswer={handleAnswer}
                />
              </div>
            </>
          ) : (
            <div className="result-container">
              <Result score={score} totalQuestions={selectedQuestions.length} />
            </div>
          )}
        </div>
      );
    }
  

export default Quiz;
