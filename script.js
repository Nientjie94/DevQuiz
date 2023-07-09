// Quiz with its properties
class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.score = 0;
      this.currentQuestionIndex = 0;
    }
  
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  
    selectAnswer(choice) {
      const currentQuestion = this.getCurrentQuestion();
      if (currentQuestion.isCorrect(choice)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
  
    isQuizEnd() {
      return this.currentQuestionIndex === this.questions.length;
    }
  
    getScore() {
      return this.score;
    }
}
  
 class Question {
    constructor(text, choices, correctAnswer) {
      this.text = text;
      this.choices = choices;
      this.correctAnswer = correctAnswer;
    }
  
    isCorrect(choice) {
      return choice === this.correctAnswer;
    }
}
  
// Array defining an array of Question objects (different questions)
const quizQuestions = [
    new Question(
      "What does HTML stand for?",
      [
        "a) HyperText Markup Language",
        "b) Home Tool Markup Language",
        "c) High-level Text Markup Language",
        "d) Hyperlink Text Markup Language"
      ],
      "a) HyperText Markup Language"
    ),
  
    new Question(
      "Which CSS property is used to change the text color of an element?",
      [
        "a) font-size",
        "b) color",
        "c) background-color",
        "d) text-align"
      ],
      "b) color"
    ),
  
    new Question(
      "Bootstrap is a framework for:",
      [
        "a) JavaScript",
        "b) CSS",
        "c) HTML",
        "d) All of the above"
      ],
      "d) All of the above"
    ),
  
    new Question(
      "How do you select an element with the id 'myElement' using JavaScript?",
      [
        "a) document.getElementByClassName('myElement')",
        "b) document.querySelector('#myElement')",
        "c) document.getElementById('myElement')",
        "d) document.getElementByTagName('myElement')"
      ],
      "c) document.getElementById('myElement')"
    ),
  
    new Question(
      "Which CSS property is used to add space between the content and the border of an element?",
      [
        "a) margin",
        "b) padding",
        "c) border-spacing",
        "d) border-width"
      ],
      "b) padding"
    ),
  
    new Question(
      "What is the result of the expression '5' + 2 in JavaScript?",
      [
        "a) 7",
        "b) 52",
        "c) 5 + 2",
        "d) 52 (as a string)"
      ],
      "b)52"
    ),
  
    new Question(
      "Which CSS property is used to control the spacing between lines of text?",
      [
        "a) line-height",
        "b) letter-spacing",
        "c) word-spacing",
        "d) text-spacing"
      ],
      "a) line-height"
    ),
  
    new Question(
      "The CSS box model consists of which of the following components?",
      [
        "a) margin, padding, border, content",
        "b) margin, padding, border, height",
        "c) padding, border, height, width",
        "d) padding, border, width, content"
      ],
      "a) margin, padding, border, content"
    ),
  
    new Question(
      "Which JavaScript function is used to add a new element to an array?",
      [
        "a) addElement()",
        "b) push()",
        "c) insertElement()",
        "d) concat()"
      ],
      "b) push()"
    ),
  
    new Question(
      "What is the purpose of the 'data-toggle' attribute in Bootstrap?",
      [
        "a) To toggle the visibility of an element",
        "b) To enable data binding in JavaScript",
        "c) To enable responsive behavior in CSS",
        "d) To toggle the state of a Bootstrap component, such as a dropdown or modal"
      ],
      "d) To toggle the state of a Bootstrap component, such as a dropdown or modal"
    )
];
  
const quiz = new Quiz(quizQuestions);
  
// Elements used (DOM)
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const submitButton = document.getElementById("submit-btn");
const scoreContainer = document.getElementById("score-container");
const retryButton = document.getElementById("retry-btn");
  
// Function to render the current question and choices
function renderQuestion() {
    if (quiz.isQuizEnd()) {
      displayScore();
    } else {
      const currentQuestion = quiz.getCurrentQuestion();
  
      questionContainer.textContent = currentQuestion.text;
      choicesContainer.innerHTML = "";
  
      currentQuestion.choices.forEach((choice) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "choice";
        radio.value = choice;
  
        label.appendChild(radio);
        label.append(choice);
  
        choicesContainer.appendChild(label);
      });
    }
}
  
// Event listener for submit button
submitButton.addEventListener("click", () => {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
      const choice = selectedChoice.value;
      quiz.selectAnswer(choice);
      renderQuestion();
    }
});
  
// Event listener for retry button
retryButton.addEventListener("click", () => {
    quiz.currentQuestionIndex = 0;
    quiz.score = 0;
    renderQuestion();
    scoreContainer.style.display = "none";
    retryButton.style.display = "none";
});
  
// Function to display the final score
function displayScore() {
    questionContainer.textContent = "Quiz completed!";
    choicesContainer.style.display = "none";
    submitButton.style.display = "none";
    scoreContainer.textContent = `Your score: ${quiz.getScore()}/${quiz.questions.length}`;
    scoreContainer.style.display = "block";
    retryButton.style.display = "block";
}
  
// Initial rendering of the first question
renderQuestion();
  
/*
Encapsulation is the pillar that we used
Encapsulation is achieved through the use of classes (Quiz and Question) to encapsulate related data (questions, score, current question index) 
and behaviors (getting the current question, selecting an answer, checking correctness) into objects. The internal details and implementation of 
these objects are hidden from the outside code, and access to their properties and methods is controlled through public interfaces (getCurrentQuestion(), 
selectAnswer(), isCorrect(), etc.). This helps to organize and modularize the code, promote code reusability, and prevent direct manipulation of internal 
data by external code.

Additionally, the use of private class fields and methods (not explicitly shown in the code) can further enhance encapsulation by restricting access to 
certain properties and behaviors within the class itself. However, in the provided code, all properties and methods are public, allowing external code to access them.

Encapsulation is one of the fundamental pillars of OOP, along with Inheritance and Polymorphism.

*/