document.addEventListener("DOMContentLoaded", function () {
    const question = document.getElementById("question");
    const options = Array.from(document.getElementsByClassName("option"));
    const scoreDisplay = document.getElementById("score");
    const categoryButtons = document.querySelectorAll(".menu button");
    let score = 0;
    let currentQuestionIndex = 0;

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
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Whale", "Giraffe", "Hippo"],
                answer: "Whale"
            },
            {
                question: "What is the capital city of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                answer: "Canberra"
            },
            {
                question: "What is the currency of Japan?",
                options: ["Yuan", "Dollar", "Yen", "Won"],
                answer: "Yen"
            },
            {
                question: "What is the national flower of Japan?",
                options: ["Cherry Blossom", "Rose", "Daisy", "Sunflower"],
                answer: "Cherry Blossom"
            },
            {
                question: "Which artist painted 'Starry Night'?",
                options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
                answer: "Vincent van Gogh"
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "San Marino", "Nauru", "Vatican City"],
                answer: "Vatican City"
            },
            {
                question: "What is the most common blood type in humans?",
                options: ["AB", "O", "A", "B"],
                answer: "O"
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
            },
            {
                question: "Which river is the longest in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                answer: "Nile"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Korea", "Japan", "Vietnam"],
                answer: "Japan"
            },
            {
                question: "What is the largest desert in the world?",
                options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica Desert"],
                answer: "Antarctica Desert"
            },
            {
                question: "Which continent is the least populated?",
                options: ["Australia", "Antarctica", "Africa", "Europe"],
                answer: "Antarctica"
            },
            {
                question: "What is the world's largest ocean?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                answer: "Pacific Ocean"
            },
            {
                question: "What is the capital city of Canada?",
                options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
                answer: "Ottawa"
            },
            {
                question: "Which European country is known as the 'Land of Fire and Ice'?",
                options: ["Ireland", "Iceland", "Finland", "Greenland"],
                answer: "Iceland"
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
            },
            {
                question: "Which famous ship sank in April 1912 on its maiden voyage?",
                options: ["Lusitania", "Titanic", "Queen Mary", "Britannic"],
                answer: "Titanic"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                answer: "William Shakespeare"
            },
            {
                question: "What was the currency of Italy before the Euro?",
                options: ["Lira", "Ducat", "Florin", "Pound"],
                answer: "Lira"
            },
            {
                question: "Which ancient civilization built the Machu Picchu complex in Peru?",
                options: ["Maya", "Inca", "Aztec", "Etruscan"],
                answer: "Inca"
            },
            {
                question: "What year did World War I begin?",
                options: ["1905", "1914", "1920", "1939"],
                answer: "1914"
            },
            {
                question: "Who was the first female Prime Minister of the United Kingdom?",
                options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Jacinda Ardern"],
                answer: "Margaret Thatcher"
            },
            {
                question: "What was the first ever James Bond film?",
                options: ["Goldfinger", "Dr. No", "Casino Royale", "From Russia with Love"],
                answer: "Dr. No"
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
            },
            {
                question: "Which band is known for their hit song 'Stairway to Heaven'?",
                options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
                answer: "Led Zeppelin"
            },
            {
                question: "Who played the character 'Tony Stark' in the Marvel Cinematic Universe?",
                options: ["Chris Hemsworth", "Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
                answer: "Robert Downey Jr."
            },
            {
                question: "Which actress portrayed 'Katniss Everdeen' in 'The Hunger Games' film series?",
                options: ["Emma Stone", "Jennifer Lawrence", "Scarlett Johansson", "Margot Robbie"],
                answer: "Jennifer Lawrence"
            },
            {
                question: "What is the name of the highest-grossing animated film of all time (as of 2022)?",
                options: ["Frozen II", "The Lion King", "Frozen", "Minions"],
                answer: "Frozen II"
            },
            {
                question: "Which actor played the character 'Harry Potter' in the film series?",
                options: ["Daniel Radcliffe", "Rupert Grint", "Tom Felton", "Matthew Lewis"],
                answer: "Daniel Radcliffe"
            },
            {
                question: "Who directed the film 'Jurassic Park'?",
                options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "George Lucas"],
                answer: "Steven Spielberg"
            },
            {
                question: "Which Disney film features the song 'Let It Go'?",
                options: ["Cinderella", "Beauty and the Beast", "Moana", "Frozen"],
                answer: "Frozen"
            }
        ]
    };
    // runGame function
    function runGame(category) {
        ongoingQuestions = questions[category];
        totalQuestions = ongoingQuestions.length;
        if (!ongoingQuestions || totalQuestions === 0) {
            endGame();
        } else {
            currentQuestionIndex = 0;
            score = 0;
            scoreDisplay.textContent = score;
            displayQuestion();
        }
    }

    function displayQuestion() {
        const currentQuestion = ongoingQuestions[currentQuestionIndex];
        if (!currentQuestion) {
            endGame();
            return;
        }
        
        question.innerText = currentQuestion.question;

        // Makes the options clickable buttons
        options.forEach((option, index) => {
            option.innerText = currentQuestion.options[index];
            option.style.display = "inline"; // Make sure options are visible
        });

        // Event listener for option being clicked
        options.forEach(option => {
            option.removeEventListener("click", handleOptionClick);
            option.addEventListener("click", handleOptionClick);
        });

        // Makes question area visible after the category is selected
        document.querySelector('.question-area').style.display = 'inline';
    }

    // Function to get a new question after each answer
    function handleOptionClick(event) {
        const selectedOption = event.target;
        const currentQuestion = ongoingQuestions[currentQuestionIndex];
        const isCorrect = currentQuestion.answer === selectedOption.innerText;
        if (isCorrect) {
            incrementScore();
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            displayQuestion();
        } else {
            endGame();
        }
    }

    // Function to increment score after each correct answer
    function incrementScore() {
        score+= 10;
        scoreDisplay.textContent = score;
    }

    function endGame() {
        // Store score in localStorage
        localStorage.setItem("quizScore", score);
        // Redirect to quiz-end.html
        window.location.assign("quiz-end.html");
    }

    // Add event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.type;
            runGame(category);
            // Hide category buttons while category is being selected
            categoryButtons.forEach(btn => {
                btn.style.display = "none";
            });
        });
    });

});