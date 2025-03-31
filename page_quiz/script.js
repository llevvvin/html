const quizData = [
    {
        question: "Сколько лет нашему театру?",
        a: "95",
        b: "134",
        c: "78",
        d: "163",
        correct: "d",
    },
    {
        question: "Кто был основателем нашего театра?",
        a: "Ломоносов",
        b: "Ярослав Мудрый",
        c: "Семен Кузнец",
        d: "Каразин",
        correct: "b",
    },
    {
        question: "Кто играет главную роль в постановке 1000 и 1 ночь",
        a: "Нино Сичинава",
        b: "Надежда Бондаренко",
        c: "Анна Попова",
        d: "Мария Шумская",
        correct: "a",
    },
    {
        question: "Какой пьесы нет в нашем репертуаре",
        a: "1000 и 1 ночь",
        b: "Кот в сапогах",
        c: "Кобзарь",
        d: "Белый лебедь",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
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
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
          
           if (score<2){
            quiz.innerHTML = `
            <h2>Вы ответили ${score}/${quizData.length} правильно</h2>
            <h2>Вы не сдали тест.Попробуйте еще раз.</h2>
            <button onclick="location.reload()">Заного</button>
            `
           }else{
            quiz.innerHTML = `
            <h2>Вы ответили ${score}/${quizData.length} правильно</h2>
            <h2>Поздравляю вы успешно прошли тест!</h2>
            <button onclick="location.reload()">Заного</button>
            `
           }
       }
    }
})