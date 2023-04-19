var questionBank = [{
        question: '¿Quién es el maximo goleador de la seleccion Argentina?',
        opcion: ['Mario Alberto Kempes', 'Claudio Caniggia', 'Diego Armando Maradona', 'Lionel Messi'],
        answer: 'Lionel Messi'
    },
    {
        question: '¿Qué mes del año tiene 28 días?',
        opcion: ['Enero', 'Febrero', 'Noviembre', 'Octubre'],
        answer: 'Febrero'
    },
    {
        question: '¿De qué color son las cajas negras de los aviones?',
        opcion: ['Negra', 'Naranja', 'Blanca', 'Roja'],
        answer: 'Naranja'
    },
    {
        question: '¿Cuál es el río más largo de la Península Ibérica?',
        opcion: ['Duero', 'Tajo', 'Guadiana', 'Guadalquivir'],
        answer: 'Tajo'
    },
    {
        question: '¿Qué número es igual a 334*7+335?',
        opcion: ['2673', '2677', '2339', '2671'],
        answer: '2673'
    }
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var opcion0 = document.getElementById('opcion0');
var opcion1 = document.getElementById('opcion1');
var opcion2 = document.getElementById('opcion2');
var opcion3 = document.getElementById('opcion3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    opcion0.innerHTML = questionBank[i].opcion[0];
    opcion1.innerHTML = questionBank[i].opcion[1];
    opcion2.innerHTML = questionBank[i].opcion[2];
    opcion3.innerHTML = questionBank[i].opcion[3];
    stat.innerHTML = "Pregunta" + ' ' + (i + 1) + ' ' + 'de' + ' ' + questionBank.length;
}

function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    } else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

next.addEventListener('click', nextQuestion);

function backToQuiz() {
    location.reload();
}

function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();