let firstCard = 8
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
    message = "Do you want to draw another card?"
    }
    else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
    }
    else {
    message = "Bust! You're out of the game!"
    isAlive = false
    }

    messageEl.textContent = message 
}

function newCard() {
    let card = 4
    sum += card
    startGame()
}
