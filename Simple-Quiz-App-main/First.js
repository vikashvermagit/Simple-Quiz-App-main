const questions = [
  {
    question: "Who is The First PrimeMinister of India",
    answer: [
      { text: "Narendra Modi", correct: false },
      { text: "Pt.Jawaharlal Nehru", correct: true },
      { text: "Indira Gandh", correct: false },
      { text: "Dr. Manmohan Singh", correct: false }
    ]
  },
  {
    question: "Who is The First President of India",
    answer: [
      { text: "DR.Rajendra Parsad", correct: true },
      { text: "Parnav Mukharjee", correct: false },
      { text: "Partibha Patil", correct: false },
      { text: "Guljarilal Nanda", correct: false }
    ]
  },
  {
    question: "Who is The First Chief Minister of Bihar",
    answer: [
      { text: "Nitish Kumar", correct: false },
      { text: "Lalu Yadav", correct: false },
      { text: "Jitan Ram Manjhi", correct: false },
      { text: "Sri Krishna Singh", correct: true }
    ]
  },
  {
    question: "Who is The First Female PrimeMinister of India",
    answer: [
      { text: "Indra Gandhi", correct: true },
      { text: "Dropadi Murmur", correct: false },
      { text: "Anna jorge", correct: false },
      { text: "Partiba Patil", correct: false }
    ]
  },
];

const ques = document.getElementById('questions');
const next = document.getElementById('next');
const answerButton = document.querySelector('.button');

let currentquestionIndex = 0;
let score = 0;

function start() {
  currentquestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentquestionIndex];
  let questionNo = currentquestionIndex + 1;
  ques.textContent = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  next.style.display = 'none';
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    score++;
    selectedBtn.classList.add('correct');
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButton.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  next.style.display = 'block';
}

function showScore() {
  resetState();
  ques.textContent = `Your score: ${score} out of ${questions.length}`;
  next.textContent = 'Play Again';
  next.style.display = 'block';
  
  next.addEventListener('click', start);
}


function handleButton() {
  currentquestionIndex++;
  if (currentquestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

next.addEventListener('click', handleButton);

start();