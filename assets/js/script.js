document.addEventListener("DOMContentLoaded", function() {
    const question = document.getElementById("question");
    const options = Array.from(document.getElementsByClassName("option"));
    let score = 0;
    let ongoingQuestion = {};
    let maxQuestions = 10;

    const questions = {
        "General Knowledge": [{
                question: "What is the collective noun for a group of giraffes?",
                options: ["Herd", "Tower", "Drift", "Band"],
                answer: "Tower"
            },
            {
                question: "What temperature centigrade does water boil at?",
                options: ["50 degrees centigrade", "100 degrees centigrade", "150 degrees centigrade", "200 degrees centigrade"],
                answer: "100 degrees centigrade"
            },
            {
                question: "According to Guinness World Records, what's the best-selling book of all time?",
                options: ["Harry Potter and the Sorcerer's Stone", "A Tale Of Two Cities", "Alice in Wonderland", "The Bible"],
                answer: "The Bible"
            }
        ],
        "Geography": [{
                question: "What is the second largest country in the world?",
                options: ["Canada", "Russia", "United States", "China"],
                answer: "Canada"
            },
            {
                question: "What is the world's southernmost country?",
                options: ["Chile", "Argentina", "Antarctica", "New Zealand"],
                answer: "Chile"
            },
            {
                question: "What is the highest mountain in the world?",
                options: ["Kilimanjaro", "Mont Blanc", "Mount Everest", "Mount Fuji"],
                answer: "Mount Everest"
            }
        ],
        "History": [{
                question: "What year did Elizabeth II become Queen?",
                options: ["1951", "1952", "1953", "1954"],
                answer: "1952"
            },
            {
                question: "In what year was the Concorde’s first flight?",
                options: ["1966", "1969", "1971", "1973"],
                answer: "1969"
            },
            {
                question: "How many years did the Hundred Years War last?",
                options: ["100", "116", "125", "145"],
                answer: "116"
            }
        ],
        "Entertainment": [{
                question: "Which series became Netflix's biggest ever show in 2021?",
                options: ["Stranger Things", "Squid Game", "Wednesday", "Bridgerton"],
                answer: "Squid Game"
            },
            {
                question: "What is the highest-rated TV series on the IMDB Top 250 TV series list?",
                options: ["The Sopranos", "Breaking Bad", "Game of Thrones", "Chernobyl"],
                answer: "Breaking Bad"
            },
            {
                question: "Peter Parker is also known as what in the world of Marvel?",
                options: ["Captain America", "Iron Man", "Spider Man", "Wolverine"],
                answer: "Spider Man"
            }
        ]
    };

    
    runGame("General Knowledge");

    function runGame(category) {
        const currentQuestions = questions[category];
        if (!currentQuestions || currentQuestions.length === 0 || maxQuestions <= 0) {
            return window.location.assign("quiz-end.html");
        }

        const randomQuestionIndex = Math.floor(Math.random() * currentQuestions.length);
        ongoingQuestion = currentQuestions[randomQuestionIndex];

        question.innerText = ongoingQuestion.question;

        // Assign options to the buttons
        options.forEach((option, index) => {
            option.innerText = ongoingQuestion.options[index];
        });

        // Remove the used question so it doesnt reappear
        currentQuestions.splice(randomQuestionIndex, 1);
        maxQuestions--;

        // Add event listeners for options after updating the question
        options.forEach(option => {
            option.addEventListener("click", handleOptionClick);
        });
    }

    function handleOptionClick(event) {
        const selectedOption = event.target;
        const isCorrect = ongoingQuestion.answer === selectedOption.innerText;
        if (isCorrect) {
            incrementScore();
        }
        runGame(Object.keys(questions)[0]); 
    }
    // increases the score for every correct answer
    function incrementScore() {
        score++;
        document.getElementById("score").innerText = score;
    }

    // Add event listeners to category buttons
    const categoryButtons = document.querySelectorAll(".option:not(.scores)");
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.type;
            runGame(category);
        });
    });
});