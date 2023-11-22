const questions = [
    { //1
        question: " Was ist die Hauptstadt von Frankreich?",
        option: ["Berlin", "Paris", "Rom"],
        correctIndex: 1
    },
    {//2
        question: " In welchem Jahr wurde die Unabhängigkeit der USA erklärt?",
        option: ["1776", "1789", "1792"],
        correctIndex: 0
    },
    { //3
        question: "Wie viele Bundesländer hat Deutschland?",
        option: ["14", "15", "16"],
        correctIndex: 2
    },
    { //4
        question: "Wie heißt der höchste Berg der Welt?",
        option: ["Mount Everest", "K2", "Kilimandscharo"],
        correctIndex: 0
    },
    {   //5
        question: "Wie heißt die Hauptstadt von Spanien?",
        option: ["Barcelona", "Madrid", "Sevilla"],
        correctIndex: 1
    },
    {  //6
        question: "Wie heißt die Hauptstadt von Italien?",
        option: ["Mailand", "Rom", "Venedig"],
        correctIndex: 1
    },
    { //7
        question: "Wie heißt die Hauptstadt von Deutschland?",
        option: ["Berlin", "Hamburg", "München"],
        correctIndex: 0
    },
    { //8
        question: " Wer war der erste Mensch im Weltraum?",
        option: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin"],
        correctIndex: 1
    },
    { //9
        question: "Wie heißt die Hauptstadt von Österreich?",
        option: ["Wien", "Salzburg", "Innsbruck"],
        correctIndex: 0
    },
    { //10
        question: "wie viele Planeten hat unser Sonnensystem?",
        option: ["7", "8", "9"],
        correctIndex: 1
    },
    { //11
        question: "welcher Planet ist der größte?",
        option: ["Erde", "Jupiter", "Saturn"],
        correctIndex: 1
    },
    { //12
        question: "Was ist die Hauptzutat in Sushi?",
        option: ["Reis", "Fisch", "Algen"],
        correctIndex: 0
    },
    { //13
        question: " Wer malte die Mona Lisa?",
        option: ["Leonardo da Vinci", "Michelangelo", "Raffael"],
        correctIndex: 0
    },
    { //14
        question: "Welcher Planet ist als der rote Planet bekannt?",
        option: ["Jupiter", "Mars", "Venus"],
        correctIndex: 1
    },
    { //15
        question: " In welchem Jahr fand die erste Mondlandung statt?",
        option: ["1969", "1970", "1971"],
        correctIndex: 0
    },
    { //16
        question: "Welches ist das kleinste Säugetier der Welt?",
        option: ["Maus", "Fledermaus", "Hamster"],
        correctIndex: 1
    },
    { //17
        question: "Wie heißt die Hauptstadt von China?",
        option: ["Peking", "Shanghai", "Hongkong"],
        correctIndex: 0
    },
    { //18
        question: "Welches ist das größte Säugetier der Welt?",
        option: ["Elefant", "Wal", "Nashorn"],
        correctIndex: 1
    },
    { //19
        question: "Welcher Kontinent ist der größte?",
        option: ["Afrika", "Asien", "Amerika"],
        correctIndex: 1
    },
    { //20
        question: "Wie heißt die Hauptstadt von Australien?",
        option: ["Sydney", "Melbourne", "Canberra"],
        correctIndex: 2
    },
    ];

    
const questionElement = document.getElementById("question");
const optionContainer = document.getElementById("option-container");


// Funktion zum Mischen eines Arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mische die Reihenfolge der Fragen
shuffleArray(questions);


function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;

    question.option.forEach((option, index) => {
        optionElements[index].textContent = option;
    });
}


const optionElements = document.querySelectorAll(".option");
const resultElement = document.getElementById("result");
const resultContainer = document.querySelector(".result-container");

let currentQuestionIndex = 0;
let score = 0;


function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctIndex) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Quiz beendet!";
    resultElement.textContent = `Ergebnis: ${score} von ${questions.length} Fragen richtig beantwortet.`;
    resultContainer.style.display = "block";
    optionElements.forEach((option) => {
        option.style.display = "none";
    });
}

optionElements.forEach((option, index) => {
    option.addEventListener("click", () => {
        checkAnswer(index);
    });
});

showQuestion();

// Reload Button damit das spiel neu geladen werden kann 
const reloadButton = document.querySelector(".load");

reloadButton.addEventListener("click", () => {
    location.reload(); 
});


function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctIndex) {
        score++;
    }

    const correctOptionIndex = question.correctIndex;

    // Zeige die richtige Antwort an
    optionElements[correctOptionIndex].classList.add("correct-answer");

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Verzögere das Anzeigen der nächsten Frage um einige Sekunden
        setTimeout(() => {
            // Entferne die Hervorhebung der richtigen Antwort
            optionElements[correctOptionIndex].classList.remove("correct-answer");
            showQuestion();
        }, 2000); // Hier kannst du die Verzögerung in Millisekunden anpassen
    } else {
        showResult();
    }
}


