document.addEventListener("DOMContentLoaded", function() {
    const question = document.getElementById("question");
    const options = Array.from(document.getElementsByClassName("option"));
    let score = 0;
    let availableQuestions = [];
    let ongoingQuestion = {};
    let correctAnswers = true;
    let buttons = document.getElementsByTagName("button");
    let generalQuestions = [{
        question:"What is the collective noun for a group of giraffes?",
        answerOne:"Herd", 
        answerTwo:"Tower", 
        answerThree:"drift", 
        answerFour:"band", 
        correctAnswer: "Tower"},
        {question:"What temperature centigrade does water boil at?", 
        answerOne:"50 degrees centigrade", 
        answerTwo:"100 degrees centigrade", 
        answerThree:"150 degrees centigrade", 
        answerFour:"200 degrees centigrade", 
        correctAnswer: "100 degrees centigrade"},
        {question:"According to Guinness World Records, what's the best-selling book of all time?",
        answerOne:"Harry Potter and the Sorcerer's Stone", 
        answerTwo:"A Tale Of Two Cities", 
        answerThree:"Alice in Wonderland", 
        answerFour:"The Bible",
        correctAnswer:"The Bible"}
    ]
    let geographyQuestions = [{
        question:"What is the second largest country in the world?", 
        answerOne:"Canada",
        answerTwo:"Russia", 
        answerThree:"United States", 
        answerFour:"China", 
        correctAnswer:"Canada"},
        {question:"What is the world's southernmost country?", 
        answerOne:"Chile", 
        answerTwo:"Argentina", 
        answerThree:"Antarctica", 
        answerFour:"New Zealand", 
        correctAnswer:"Chile"},
        {question:"What is the highest mountain in the world?", 
        answerOne:"Kilimanjaro", 
        answerTwo:"Mont Blanc", 
        AnswerThree:"Mount Everest", 
        answerFour:"Mount Fuji", 
        correctAnswer:"Mount Everest"},
    ]
    let historyQuestions = [{
        question:"What year did Elizabeth II become Queen?", 
        answerOne:"1951", 
        answerTwo:"1952", 
        answerThree:"1953", 
        answerFour:"1954", 
        correctAnswer:"1952"},
        {question:"In what year was the Concorde’s first flight?", 
        answerOne:"1966", 
        answerTwo:"1969", 
        answerThree:"1971", 
        answerFour:"1973", 
        correctAnswer:"1969"},
        {question:"How many years did the hundred years war last?", 
        answerOne:"100", 
        answerTwo:"116", 
        answerThree:"125", 
        answerFour:"145", 
        correctAnswer:"116"}
    ]
    let entertainmentQuestions = [{
        question:"Which series became Netflix biggest ever show in 2021", 
        answerOne:"Stranger Things", 
        answerTwo:"Squid Game", 
        answerThree:"Wednesday", 
        answerFour:"Bridgerton", 
        correctAnswer:"Squid Game"},
        {question:"What is the highest-rated TV series on the IMDB Top 250 TV series list?", 
        answerOne:"The Sopranos", 
        answerTwo:"Breaking Bad", 
        answerThree:"Game of Thrones", 
        answerFour:"Chernobyl", 
        correctAnswer:"Breaking Bad"},
        {Question:"Peter Parker is also known as what in the world of Marvel?", 
        AnswerOne:"Captain America", 
        answerTwo:"Iron Man", 
        answerThree:"Spider Man", 
        answerFour:"Wolverine", 
        correctAnswer:"Spider Man"}
    ]
    const maxQuestions = 10;
});
/** Allows the player to select a question category to start 
*/
for (let button of buttons) {
    button.addEventListener("click", function() {
        if(this.getAttribute("date-type") === "submit") {
            checkAnswer();
        } else {
            let category = this.getAttribute("data-type");
            runGame(category);
        }    
    })        
    let category = (document.getElementsByClassName("menu"));
    button.addEventListener("click", function() {
    if (category === "generalQuestions") {
        displayGeneralQuestions();
    } else if (category === "geographyQuestions") {
        displayGeographyQuestions();
    } else if (category === "historyQuestions") {
        DisplayHistoryQuestions();
    } else if (category === "entertainmentQuestions") {
        displayEntertainmentQuestions();
    } else {
        alert(`unknown game type: ${category}`);
        throw `unknown game type: ${category}. Aborting!`;
    }

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("date-type") === "submit") {
                checkAnswer();
            } else {
                let category = this.getAttribute("data-type");
                runGame(category);
            }
        });
    }}
)}
/**Retrieves a new random question from the available questions list and updates the
 * quiz interface with new questions and its options. If there are no more available
 * questions or max amount of questions have been reached,
 * it saves the user's score and redirect them to quiz-end.html page.
 */
const getQuestion = () => {

    // Checks if there are no more available questions or if the maximum number of questions has been reached.
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {

        // Redirects user to quiz-end.html page.
        return window.location.assign("quiz-end.html");
    }
     // Choose a random question from the list of available questions and display it.
        const randomQuestion = Math.floor(Math.random() * availableQuestions.length);
        ongoingQuestion = availableQuestions[randomQuestion];
        question.innerText = ongoingQuestion.question;
}
    // Display the answer option for the current question.
    options.forEach(option => {
        const number = option.dataset.number;
        option.innerText = ongoingQuestion["option" + number];
    });

    // Remove the current question from the list of available questions.
    availableQuestions.splice(randomQuestion, 1);

    correctAnswers = true;
    // Adds a click event listener to each option element.
options.forEach(option => {
    option.addEventListener("click", event => {

        // Check if an answer has already been submitted for this question.
        if (!correctAnswers) return;

        // Prevent submitting multiple answers for the same question.
        correctAnswers = false;

        const selectedOption = event.target;
        const isCorrect = ongoingQuestion.answer === selectedOption.innerText;

        // If the answer is correct, increment the score by the scorePoints value.
        if (isCorrect) {
            incrementScore("score");
        }
})
})

/**
 * Check the answer against the first element in the 
 * returned calculateCorrectAnswer array
 */

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = correctAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Correct!");
        incrementScore();
    } else {
        alert(`You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);

const maxQuestions = 10;
/**
 * Gets the current score from the dom and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}
}
function displayGeneralQuestions() {
    document.getElementById("question")
}

