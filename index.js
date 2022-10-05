
let allCards = []
let sum = 0;
let comparedSum = 21
let message = document.getElementById("message-el")
let cards = document.getElementById("card")
let sumofTwoCards = document.getElementById("sum")
let start = document.getElementById("start")
let playerEl = document.getElementById("player-el")
let isAlive = false
let hasBlackJack = false

const getRandom = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    let randomNumber = Math.floor(Math.random() * (max - min) + min)
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else { return randomNumber }
}

const startGame = () => {
    isAlive = true
    let firstCard = getRandom(1, 13)
    let secondCard = getRandom(1, 13)
    allCards = [firstCard, secondCard]
    sum = firstCard + secondCard
    document.getElementById("draw").classList.add("hover");
    document.getElementById("draw").classList.remove("changeColor");

    renderGame()
}
const renderGame = () => {
    let hasBlackJack = false
    if (sum < comparedSum) {
        message.textContent = "Do you want to draw a new card?"

    }
    else if (sum === 21) {
        message.textContent = "Wohoo! You've got Blackjack! "
        hasBlackJack = true

    }
    else {
        message.textContent = "You're out of the game!";
        isAlive = false
    }

    cards.textContent = ` Cards: ${allCards}`
    sumofTwoCards.textContent = `Sum: ${sum}`
    start.textContent = "Start again"

}

function drawCard() {
    if (isAlive && !hasBlackJack) {
        let newCard = getRandom(2, 11)
        allCards.push(newCard)
        sum += newCard
        renderGame()
    } else {
        document.getElementById("draw").classList.remove("hover");
        document.getElementById("draw").classList.add("changeColor");
    }
}

