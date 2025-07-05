// Quiz Data
const quizData = [
    {
                question: "Which Canadian Victoria Cross recipient, known for his self-sacrifice with a grenade, died in the Battle of Hong Kong?",
                options: ["Frederick Albert Tilston", "Henry Howey Robson", "John Robert Osborn", "David Vivian Currie"],
                correctAnswer: 2,
                heroName: "Company Sergeant-Major John Robert Osborn",
                heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/John_Robert_Osborn.jpg/220px-John_Robert_Osborn.jpg", // Public domain image
                mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hong_Kong_Island_map.png/800px-Hong_Kong_Island_map.png", // Public domain map
                dialogMessage: "Company Sergeant-Major John Robert Osborn was awarded the Victoria Cross posthumously for his extraordinary bravery during the Battle of Hong Kong on December 19, 1941. When a Japanese hand grenade landed among his company, he shouted a warning and threw himself on it, sacrificing his life to save his comrades. His name is inscribed on the Sai Wan Bay Memorial in Hong Kong. In North York, he is honoured at the Victoria Cross Memorial at York Cemetery.",
                cemeteryHint: "To find the answer, look for the memorial that honours all Canadian Victoria Cross recipients in the North York Cemetery. It's a place of collective remembrance."
            },
            {
                question: "John Robert Osborn's heroic act of self-sacrifice occurred during which major battle of World War II?",
                options: ["Battle of the Somme", "Battle of Vimy Ridge", "Battle of Hong Kong", "Battle of Normandy"],
                correctAnswer: 2,
                heroName: "Company Sergeant-Major John Robert Osborn",
                heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/John_Robert_Osborn.jpg/220px-John_Robert_Osborn.jpg",
                mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hong_Kong_Island_map.png/800px-Hong_Kong_Island_map.png",
                dialogMessage: "The Battle of Hong Kong was a fierce and ultimately tragic conflict during the early days of World War II. Canadian forces, including the Winnipeg Grenadiers, played a crucial role in its defence against overwhelming Japanese forces. Osborn's act of valour stands as a testament to the bravery displayed by all who fought there.",
                cemeteryHint: "His story is part of the larger narrative commemorated at the Victoria Cross Memorial. Consider the global conflicts in which Canadians earned their highest honours, particularly those involving the Far East."
            },
            {
                question: "Which major conflict saw the highest number of Victoria Crosses awarded to Canadians?",
                options: ["Second Boer War", "First World War", "Second World War", "Korean War"],
                correctAnswer: 1,
                heroName: "Canadian Victoria Cross Recipients",
                heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Victoria_Cross_Medal_Ribbon.jpg/220px-Victoria_Cross_Medal_Ribbon.jpg", // Generic VC image
                mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Europe_1914.svg/800px-Europe_1914.svg.png", // Map of Europe during WWI
                dialogMessage: "The First World War saw an unprecedented number of Victoria Crosses awarded to Canadians, reflecting the intense and often brutal nature of trench warfare and the immense bravery displayed by soldiers on the Western Front. Canada's contributions at battles like Vimy Ridge and Passchendaele were particularly significant.",
                cemeteryHint: "The Victoria Cross Memorial at York Cemetery is divided by conflict. Observe which section has the most plaques to find the answer."
            },
            {
                question: "Which Canadian province has produced the most Victoria Cross recipients?",
                options: ["Quebec", "British Columbia", "Ontario", "Manitoba"],
                correctAnswer: 2,
                heroName: "Canadian Victoria Cross Recipients by Province",
                heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Canada_map.svg/800px-Canada_map.svg.png", // Map of Canada
                mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Canada_map.svg/800px-Canada_map.svg.png", // Map of Canada
                dialogMessage: "Ontario, being Canada's most populous province during the major conflicts, contributed a significant number of soldiers who earned the Victoria Cross. Its large population base meant a greater representation in the armed forces and, consequently, more opportunities for acts of valor to be recognized.",
                cemeteryHint: "While specific graves might be spread out, the Victoria Cross Memorial at York Cemetery acknowledges the province of origin for many recipients. Look for patterns in their backgrounds."
            },
            {
                question: "Among the ranks of Victoria Cross recipients, which of these is most commonly associated with individual acts of bravery?",
                options: ["Officer ranks (Lieutenant, Captain, Major)", "Non-commissioned officers (Sergeant, Company Sergeant-Major)", "Private", "Senior officers (Colonel, General)"],
                correctAnswer: 2, // Privates and NCOs are most common
                heroName: "Victoria Cross Ranks",
                heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Canadian_Infantryman_WWII.jpg/220px-Canadian_Infantryman_WWII.jpg", // Generic soldier image
                mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Battle_of_the_Somme_map.png/800px-Battle_of_the_Somme_map.png", // Generic battlefield map
                dialogMessage: "While the Victoria Cross can be awarded to any rank, it is frequently awarded to privates and non-commissioned officers (NCOs) who are often at the forefront of direct combat. Their acts of spontaneous and extreme bravery, self-sacrifice, and leadership under fire are frequently recognized.",
                cemeteryHint: "When visiting graves or memorials, pay attention to the ranks inscribed on the plaques. You'll notice many are for those who served on the front lines."
            },
            {
                question: "Who was the first Canadian to be awarded the Victoria Cross during the Second World War?",
                options: ["Frederick Albert Tilston", "David Vivian Currie", "John Robert Osborn", "Paul Triquet"],
                correctAnswer: 2,
                heroName: "Company Sergeant-Major John Robert Osborn",
                heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/John_Robert_Osborn.jpg/220px-John_Robert_Osborn.jpg",
                mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hong_Kong_Island_map.png/800px-Hong_Kong_Island_map.png",
                dialogMessage: "Company Sergeant-Major John Robert Osborn's act of self-sacrifice in Hong Kong made him the first Canadian recipient of the Victoria Cross in the Second World War. His bravery set a powerful example for all Canadian forces during the conflict.",
                cemeteryHint: "His story is prominently featured at the Victoria Cross Memorial, marking the beginning of Canada's highest honors in WWII."
            },
            {
                question: "Which type of Canadian military force has received the most Victoria Crosses?",
                options: ["Royal Canadian Navy", "Royal Canadian Air Force", "Canadian Army (Infantry)", "Special Forces"],
                correctAnswer: 2,
                heroName: "Victoria Cross by Force",
                heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Canadian_Infantryman_WWII.jpg/220px-Canadian_Infantryman_WWII.jpg",
                mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/World_War_I_Western_Front_map.svg/800px-World_War_I_Western_Front_map.svg.png",
                dialogMessage: "The vast majority of Victoria Crosses awarded to Canadians have gone to members of the Canadian Army, particularly infantry units. This reflects the nature of ground combat, where direct engagements with the enemy often provide the circumstances for acts of extreme bravery.",
                cemeteryHint: "The Victoria Cross Memorial at York Cemetery primarily commemorates soldiers from various army regiments. This should give you a clue!"
            },
            {
                question: "The Victoria Cross is the highest military honour for bravery in the face of the enemy. What is the main material it's made from?",
                options: ["Gold", "Silver", "Bronze", "Gunmetal"],
                correctAnswer: 3,
                heroName: "The Victoria Cross Medal",
                heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Victoria_Cross_Medal_Ribbon.jpg/220px-Victoria_Cross_Medal_Ribbon.jpg",
                mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/British_Empire_1921.png/800px-British_Empire_1921.png",
                dialogMessage: "The Victoria Cross is famously made from gunmetal, specifically from the bronze of Russian cannons captured during the Crimean War. This unique origin adds to its prestige and symbolic value.",
                cemeteryHint: "While you can't touch the medal itself, knowing its unique composition is a fun fact about this prestigious award!"
            },
            {
                question: "How many Canadian recipients of the Victoria Cross are commemorated at the Victoria Cross Memorial at York Cemetery in North York?",
                options: ["50", "75", "99", "120"],
                correctAnswer: 2,
                heroName: "Victoria Cross Memorial",
                heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Victoria_Cross_Medal_Ribbon.jpg/220px-Victoria_Cross_Medal_Ribbon.jpg",
                mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/York_Cemetery_Toronto_Map.png/800px-York_Cemetery_Toronto_Map.png",
                dialogMessage: "The Victoria Cross Memorial at York Cemetery honours all 99 Canadian recipients of the Victoria Cross. It's a significant national landmark dedicated to their memory and sacrifice.",
                cemeteryHint: "The memorial itself has plaques for each recipient. A quick count or reading the introductory plaque at the memorial will reveal the answer!"
            },
            {
                question: "Which British monarch established the Victoria Cross in 1856?",
                options: ["King George V", "Queen Victoria", "King Edward VII", "Queen Elizabeth II"],
                correctAnswer: 1,
                heroName: "Origin of the Victoria Cross",
                heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Queen_Victoria_by_Bassano.jpg/220px-Queen_Victoria_by_Bassano.jpg", // Queen Victoria portrait
                mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/British_Empire_map_1897.svg/800px-British_Empire_map_1897.svg.png", // British Empire map
                dialogMessage: "The Victoria Cross was instituted by Queen Victoria on January 29, 1856, to honour acts of extreme bravery during the Crimean War. It remains the highest military decoration for gallantry in the Commonwealth.",
                cemeteryHint: "The memorial at York Cemetery is named after her, a testament to her enduring legacy and the award she created."
            }
];

// Game State Variables
let currentQuestionIndex = 0;
let score = 0;
let quizStarted = false;

// UI Element References
const gameContainer = document.getElementById('game-container');
const startScreen = document.getElementById('start-screen');
const startGameBtn = document.getElementById('start-game-btn');
const quizUI = document.getElementById('quiz-ui');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackMessage = document.getElementById('feedback-message');
const scoreDisplay = document.getElementById('score-display');
const nextQuestionBtn = document.getElementById('next-question-btn');
const endScreen = document.getElementById('end-screen');
const finalScoreDisplay = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again-btn');

// Event Dialog Elements
const eventDialog = document.getElementById('event-dialog');
const dialogMapImage = document.getElementById('dialog-map-image');
const dialogPortraitImage = document.getElementById('dialog-portrait-image');
const dialogText = document.getElementById('dialog-text');
const dialogCemeteryHint = document.getElementById('dialog-cemetery-hint');
const dialogCloseBtn = document.getElementById('dialog-close-btn');

/**
 * Initializes the game by setting up event listeners and showing the start screen.
 */
function initializeGame() {
    startGameBtn.addEventListener('click', startGame);
    nextQuestionBtn.addEventListener('click', nextQuestion);
    playAgainBtn.addEventListener('click', resetGame);
    dialogCloseBtn.addEventListener('click', hideEventDialog);

    // Show the game container once JS is loaded
    gameContainer.classList.add('visible');
    showStartScreen();
}

/**
 * Shows the start screen and hides other game elements.
 */
function showStartScreen() {
    startScreen.style.display = 'flex';
    quizUI.style.display = 'none';
    endScreen.style.display = 'none';
    eventDialog.style.display = 'none';
}

/**
 * Starts the quiz game.
 * Hides the start screen, initializes score and question index,
 * and displays the first question.
 */
function startGame() {
    quizStarted = true;
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    startScreen.style.display = 'none';
    quizUI.style.display = 'flex';
    displayQuestion();
}

/**
 * Displays the current question and its answer options.
 * Resets feedback and enables answer buttons.
 */
function displayQuestion() {
    const questionData = quizData[currentQuestionIndex];
    questionText.textContent = questionData.question;
    optionsContainer.innerHTML = ''; // Clear previous options
    feedbackMessage.textContent = '';
    nextQuestionBtn.style.display = 'none'; // Hide next button until answer is checked

    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.dataset.index = index; // Store original index
        button.addEventListener('click', () => checkAnswer(button, index, questionData.correctAnswer));
        optionsContainer.appendChild(button);
    });
}

/**
 * Checks the selected answer against the correct answer.
 * Updates score, provides visual feedback, and shows the next question button.
 * @param {HTMLElement} selectedButton - The button element that was clicked.
 * @param {number} selectedIndex - The index of the selected answer.
 * @param {number} correctIndex - The index of the correct answer.
 */
function checkAnswer(selectedButton, selectedIndex, correctIndex) {
    // Disable all option buttons after an answer is selected
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === correctIndex) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        selectedButton.classList.add('correct');
        feedbackMessage.textContent = "Correct!";
    } else {
        selectedButton.classList.add('incorrect');
        // Highlight the correct answer
        optionsContainer.children[correctIndex].classList.add('correct');
        feedbackMessage.textContent = "Incorrect. Try again!";
    }
    nextQuestionBtn.style.display = 'block'; // Show next button
}

/**
 * Moves to the next question or ends the game if all questions are answered.
 * Shows the event dialog before moving to the next question.
 */
function nextQuestion() {
    const questionData = quizData[currentQuestionIndex];
    showEventDialog(questionData); // Show dialog with hero info and hint

    // The actual progression to the next question happens after the dialog is closed
}

/**
 * Displays the event dialog with information about the current hero.
 * @param {object} heroData - Object containing hero details (name, image, message, hint).
 */
function showEventDialog(heroData) {
    dialogMapImage.src = heroData.mapImage;
    dialogPortraitImage.src = heroData.heroImage;
    dialogText.textContent = `Hero: ${heroData.heroName}\n\n${heroData.dialogMessage}`;
    dialogCemeteryHint.textContent = heroData.cemeteryHint;
    eventDialog.style.display = 'flex';
}

/**
 * Hides the event dialog and proceeds to the next question or ends the game.
 */
function hideEventDialog() {
    eventDialog.style.display = 'none';
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

/**
 * Ends the game, displays the final score, and shows the play again button.
 */
function endGame() {
    quizUI.style.display = 'none';
    endScreen.style.display = 'flex';
    finalScoreDisplay.textContent = `You scored ${score} out of ${quizData.length} questions!`;
}

/**
 * Resets the game to its initial state, ready for a new round.
 */
function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    quizStarted = false;
    showStartScreen();
}

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeGame);