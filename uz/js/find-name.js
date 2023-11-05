const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let curentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `../img/find-name/hangman-${wrongGuessCount}.svg`
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = curentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show")
}

const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    curentWord = word;
    // console.log(word);
    document.querySelector(".hint-text b").innerText = hint;
    resetGame()
}

const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `Siz topgan ism:` : `To'g'ri javob:`;
        gameModal.querySelector("img").src = `../img/find-name/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Tabriklayman!' : 'Yutqazdingiz!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${curentWord}</b>`;
        gameModal.querySelector("button").innerText = `${isVictory ? 'Keyingi ism' : 'Qaytadan boshlash'}`;
        gameModal.classList.add("show")
    }, 300);
}

const initGame = (button, clickedLetter) => {
    if (curentWord.includes(clickedLetter)) {
        [...curentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter)
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `../img/find-name/hangman-${wrongGuessCount}.svg`
    }

    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === curentWord.length) return gameOver(true);
}


for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();

playAgainBtn.addEventListener("click", getRandomWord);