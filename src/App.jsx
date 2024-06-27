import React, { useState } from 'react';
import questionsData from './questionsData'; // Import questions and answers array
import cx from './utility/cx';

function App() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Calculate score based on correct answers
    let calculatedScore = 0;
    questionsData.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        calculatedScore++;
      }
    });

    setScore(calculatedScore);
  };

  const handleOptionChange = (event, questionIndex) => {
    const { value } = event.target;
    setAnswers({ ...answers, [questionIndex]: value });
  };
console.log(answers, score)
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold text-center text-red">Computer Science PGT Quiz</h1>
        <p className='font-bold mb-4 text-center text-gray-600'>Computer oraganization and architecture</p>
        <form onSubmit={handleSubmit} className=''>
          {questionsData.map((question, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold mb-2">{`${index + 1}. ${question.question}`}</p>
              <div className="ml-4">
                {question.options.map((option, optionIndex) => (
                  <label key={optionIndex} 
                  className={cx(`flex items-center mb-2`,
                    (score && option === question?.correctAnswer) && "text-green-400",
                    (score && option == answers[index] && answers[index] !== question?.correctAnswer) && "text-red-400"
                  )}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={(e) => handleOptionChange(e, index)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
              {score && `Correct Answer: ${question?.correctAnswer}` }
            </div>
          ))}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit Quiz
          </button>
          <button type='button' className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=> {
            setAnswers({});
            setScore(null);
          }}
          >
            Reset
          </button>
        </form>

        {/* Display score if available */}
        {score !== null && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
            <p className="text-lg">{`You scored ${score} out of ${questionsData.length}.`}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
