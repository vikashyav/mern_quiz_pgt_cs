// JavaScript to handle quiz submission and score calculation
const quizForm = document.getElementById('quizForm');
const scoreSection = document.getElementById('scoreSection');
const scoreMessage = document.getElementById('scoreMessage');

quizForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Calculate score based on correct answers
  let score = 0;
  const correctAnswers = ['a', 'a', 'a', 'b', 'a', 'c', 'b', 'b', 'b', 'b', 'b', 'a', 'b', 'a', 'd', 'c', 'b', 'a', 'b', 'b', 'a', 'b', 'a', 'c', 'a', 'b', 'a', 'a', 'b', 'c', 'a', 'b', 'b', 'b', 'a', 'b', 'b', 'a'];

  for (let i = 0; i < quizForm.length - 1; i++) {
    if (quizForm.elements[i].type === 'radio' && quizForm.elements[i].checked) {
      if (quizForm.elements[i].value === correctAnswers[i]) {
        score++;
      }
    }
  }

  // Display score
  scoreMessage.textContent = `You scored ${score} out of ${correctAnswers.length}.`;
  scoreSection.classList.remove('hidden');
});
