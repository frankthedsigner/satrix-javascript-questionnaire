import { questions } from '../data/questions.data.js'

let questionPosition = 1

const questionDataHandler = () => {
  let questionPosValue = `${(questionPosition / questions.length) * 100}%`

  document.getElementById(
    'question-number'
  ).innerText = `Question ${questionPosition}`
  document.getElementById('progress-bar').style.width = questionPosValue
  document.getElementById('progress-info').style.width = questionPosValue
  document.getElementById('progress-info').innerText = questionPosValue
  setValues(questionPosition)
}

const selectQuestion = (num) => questions.find((i) => i.questionNo === num)

const setValues = (num) => {
  let answerA = document.getElementById('answer-a')
  let answerB = document.getElementById('answer-b')
  let answerC = document.getElementById('answer-c')

  document.querySelector('[data-question="Question"]').innerHTML =
    selectQuestion(num).question.value

  answerA.innerHTML = selectQuestion(num).answers.answer1.value
  answerA.addEventListener('click', () => {
    console.log(selectQuestion(num).answers.answer1.state)
  })

  answerB.innerHTML = selectQuestion(num).answers.answer2.value
  answerB.addEventListener('click', () => {
    console.log(selectQuestion(num).answers.answer2.state)
  })

  answerC.innerHTML = selectQuestion(num).answers.answer3.value
  answerC.addEventListener('click', () => {
    console.log(selectQuestion(num).answers.answer3.state)
  })
}

questionDataHandler()
