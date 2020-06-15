const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const startBtn = document.getElementById("startBtn");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const comment = document.getElementById("comment");
const nextBtn = document.getElementById("nextBtn");
const scoreContainer = document.getElementById("scoreContainer");

let quizData = [
  {
    question: "첫번째 문제입니다",
    choiceA: "보기 1-1",
    choiceB: "보기 1-2",
    choiceC: "보기 1-3",
    choiceD: "보기 1-4",
    correct: "A"
  },
  {
    question: "두번째 문제입니다",
    choiceA: "보기 2-1",
    choiceB: "보기 2-2",
    choiceC: "보기 2-3",
    choiceD: "보기 2-4",
    correct: "B"
  },
  {
    question: "세번째 문제입니다",
    choiceA: "보기 3-1",
    choiceB: "보기 3-2",
    choiceC: "보기 3-3",
    choiceD: "보기 3-4",
    correct: "C"
  }
];

let lastQuestion = quizData.length - 1;
let runningQuestion = 0;
let score = 0;

startBtn.addEventListener("click", quizStart);

function quizStart() {
  start.style.display = "none";
  quiz.style.display = "block";
  renderQuestion();
}

function renderQuestion() {
  let q = quizData[runningQuestion];

  question.innerHTML = q.question;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

function checkAnswer(ans) {
  if (ans == quizData[runningQuestion].correct) {
    score++;
    answerIsCorrent();
  } else {
    answerIsWrong();
  }
}

nextBtn.addEventListener('click', nextQuestion);

function nextQuestion() {
	comment.style.display = "none";
	if(runningQuestion < lastQuestion){
		runningQuestion++;
		renderQuestion();	  
	}else{
		scoreContainer.style.display = "block";
		scoreContainer.innerHTML = "퀴즈를 모두 마치셨습니다."
	}
}

function answerIsCorrent() {
    nextBtn.style.display = "block";
    comment.style.display = "block";
    comment.innerHTML += "정답입니다.";
}
function answerIsWrong() {
	nextBtn.style.display = "block";
	comment.style.display = "block";
	comment.innerHTML += "오답입니다.";
}
