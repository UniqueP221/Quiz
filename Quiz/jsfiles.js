document.getElementById("strbtn").addEventListener("click", Test)

const quizData = [
    {
      question: "What day comes before Monday?",
      a: "Saturday",
      b: "Tuesday",
      c: "Sunday",
      correct: "c",
    },
    {
      question: "How many months have 28 days?",
      a: "11",
      b: "12",
      c: "1",
      correct:"b",
    }, 
    {
      question: "What stays in the corner but travels everywhere?",
      a: "stamp",
      b: "tv",
      c: "plant",
      correct: "a",
    },
  
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer') 
  const questionEL = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const submitBtn = document.getElementById('submit')

  var clock = document.getElementById('time')

  var time = quizData.length * 15;
  var timerId;
  
  let currentQuiz = 0 
  let score = 0 

  loadQuiz()

function loadQuiz() {


    if(currentQuiz === 0){
    timerId = setInterval(clockStart, 1000);
    }
    clock.textContent = time;



  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEL.textContent = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
}

function clockStart() {
    time--;
    clock.textContent = time;
    if (time <= 0) {
        clearInterval(timerId)
    }

    
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id 
    }



})
return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          console.log(answer)
        score++
      } 
      else{
          time -= 15 
      }
      currentQuiz++

      if(currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> You answered ${score}/${quizData.length} questions correctly </h2>
        <button onclick="location.reload()">Reload</button>
        ` 
        clearInterval(timerId)
        // time -= 15;
        // clock.textContent = time;
      }
    }
})

var count = 0;
// var time = 30;
var marks = 0;
var answer = [];
// var timer;


function buttons_manager(){
  if(count > 0){
    $(`#prev`).show();
    if(count == 4){
      $(`#next`).hide();
      $(`#finish`).show();
    }
    else{
      $(`#next`).show();
    }
  }
  else{
    $(`#prev`).hide();
  }
}

console.log(answer)