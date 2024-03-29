let firstCard = 8
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


function startGame() {
    if (sum <= 20) {
    let message = "Do you want to draw another card?"
    }
    else if (sum === 21) {
    let message = "Woohoo! You've got Blackjack!"
    hasBlackJack = true
    }
    else {
    let message = "Bust! Youre out of the game!"
    isAlive = false
    }
console.log(message)
}

