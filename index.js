const quizData = [
    {
        question: "What does HTML stands for?",
        options: [
            "Hyper Transfer Markup Language",
            "Hypertext Markup Language",
            "Hypertext Machine Language",
            "HyperLink Markup Laguage"
        ],
        correct: 1,
    },

    {
        question: "What is the effect of the <b> tag?",
        options: [
            "It is used to change the font size",
            "It converts the text within it to bold font",
            "It is used to write black-colored font",
            "None of the above"
        ],
        correct: 1,
    },

    {
        question: "What tag is used to render an image on a webpage?",
        options: [
            "img",
            "src",
            "image",
            "HyperLink Markup Laguage"
        ],
        correct: 0,
    },

    {
        question: "What is the correct syntax to write an HTML comment?",
        options: [
            "// Comment",
            "# Comment",
            "<!-- Comment -->",
            "/* Comment */"
        ],
        correct: 2,
    },

    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        options: [
            "<br>",
            "<a>",
            "<pre>",
            "<b>",
        ],
        correct: 0,
    },

    {
        question: "How to create an unordered list in HTML?",
        options: [
            "<ul>",
            "<ol>",
            "<i>",
            "<li>"
        ],
        correct: 0,
    },

    {
        question: "How to create a hyperlink in HTML?",
        options: [
            `<a url= "www.google.com"> google.com </a>`,
            `<a link = "www.google.com"> google.com </a>`,
            `<a href = "www.google.com"> google.com </a>`,
            `<a> google.com </a>`
        ],
        correct: 2,
    },

    {
        question: "The <hr> tag in HTML is used for -",
        options: [
            "new line",
            "vertical ruler",
            "new paragraph",
            "horizontal ruler"
        ],
        correct: 3,
    },

    {
        question: "How to insert a background image in HTML?",
        options: [
            `<body background = "img.png">`,
            `<img background = "img.png">`,
            `<bg-image = "img.png">`,
            "None of the above"
        ],
        correct: 0,
    },

    {
        question: "An HTML program is saved by using the ____ extension.",
        options: [
            ".ht",
            ".html",
            ".hml",
            ".xml"
        ],
        correct: 1,
    },

    {
        question: "Which of the following HTML tag is used to display the text with scrolling effect?",
        options: [
            "<marquee>",
            "<scroll>",
            "<div>",
            "None of the above"
        ],
        correct: 0,
    },

    {
        question: "The tags in HTML are -",
        options: [
            "case-sensitive",
            "in upper case",
            "in lowercase",
            "not case sensitive"
        ],
        correct: 3,
    },

    {
        question: "which of the following tag is used to initialize the document type?",
        options: [
            "<Doctype HTML>",
            "<\Doctype html>",
            "<!DOCTYPE html>",
            "<Doctype>"
        ],
        correct: 2,
    },

    {
        question: "Which of the following tags doesn’t require a closing tag?",
        options: [
            `<br>`,
            `<hr>`,
            `Both A and B`,
            "None of the above"
        ],
        correct: 2,
    },

    {
        question: "Which property allows an image link to show a text label?",
        options: [
            "alt",
            "str",
            "alternative",
            "None of the above"
        ],
        correct: 0,
    }

    
];
const quiz = document.getElementById('quiz');
const answerElement = document.querySelectorAll('.answer');
const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');
const option4 = document.getElementById('option-4');
const questionElement = document.getElementById('question');
const buttonElement = document.getElementById('button');

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    questionElement.innerText = `${currentQuiz + 1}. ${question}`;
    option1.innerText = options[0];
    option2.innerText = options[1];
    option3.innerText = options[2];
    option4.innerText = options[3];
};

loadQuiz();

const getSelectedOption = () => {
    let answer_index;
    answerElement.forEach((curAnswer, index) => {
        if (curAnswer.checked) {
            answer_index = index;
        }
    });
    return answer_index;
}
const deSelectedAnswers = () => {
    return answerElement.forEach((curAnswer) => (curAnswer.checked = false));
}
buttonElement.addEventListener('click', () => {
    const selectedOption = getSelectedOption();
    console.log(selectedOption);

    if(selectedOption === quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;

    if(currentQuiz < quizData.length){
        deSelectedAnswers();
        loadQuiz();
    } else{
       quiz.innerHTML = `
       <div class='result'>
        <h2>Your Score: ${score}/${quizData.length} Correct Answers 🔮</h2>
        <h3>Congratulations on Completing the HTML Quiz! 🎉 </h3>
        <button class = 'reload-button' onclick = 'location.reload()'>Let's Play Again 😉</button>    
        </div>
         `
    }
});