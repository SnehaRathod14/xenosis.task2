const questions = [
    {
      question: 'What is the capital of France?',
      answers: [
        { text: 'Paris', correct: true },
        { text: 'Berlin', correct: false },
        { text: 'Madrid', correct: false },
        { text: 'Rome', correct: false }
      ]
    },
    {
      question: 'Which planet is known as the Red Planet?',
      answers: [
        { text: 'Earth', correct: false },
        { text: 'Mars', correct: true },
        { text: 'Jupiter', correct: false },
        { text: 'Saturn', correct: false }
      ]
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      answers: [
        { text: 'William Shakespeare', correct: true },
        { text: 'Jane Austen', correct: false },
        { text: 'Charles Dickens', correct: false },
        { text: 'Mark Twain', correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const resultElement = document.getElementById('result');
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }
  
  function resetState() {
    clearStatusClass(document.body);
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    resultElement.innerText = '';
    document.getElementById('next-btn').style.display = 'none';
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct === 'true');
      button.disabled = true;
    });
    if (correct) {
      score++;
    }
    showResult(correct);
    document.getElementById('next-btn').style.display = 'block';
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }
  
  function showResult(correct) {
    if (correct) {
      resultElement.innerText = 'Correct!';
    } else {
      resultElement.innerText = 'Wrong!';
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      finishQuiz();
    }
  }
  
  function finishQuiz() {
    questionElement.innerText = `Quiz completed! Your score is ${score} out of ${questions.length}.`;
    answerButtonsElement.innerHTML = '';
    resultElement.innerText = '';
    document.getElementById('next-btn').style.display = 'none';
  }
  