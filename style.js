let cards = [] 
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
// let sumEl = document.querySelector("#sum-el")

let player = {
	name: "Neha",
	chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomcard(){
	let getrandom = Math.floor(Math.random() * 13) + 1
	if(getrandom == 1){
		return 11
	}
	else if(getrandom > 10){
		return 10
	}
	else{
		return getrandom
	}
}

function startGame(){
	firstCard = getRandomcard()
    secondCard = getRandomcard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
	isAlive = true

	renderGame()
}

function renderGame(){

    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    for(i = 0;i<cards.length;i++){
    	cardEl.textContent += cards[i] + " "
    }
	if(sum < 21){
		message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
	    message = "Woohooo!, You've got the blackjack!"
	    hasBlackjack = true
	    isAlive = true
    }
    else{
    	message = "You're out of the game!"
	    isAlive = false
	}

    messageEl.textContent = message

}


function newCard(){
	if(sum < 21 && sum != 0){
		let card = getRandomcard()
	    cards.push(card)
	    sum += card
	    sumEl.textContent = "Sum: " + sum
		isAlive = true
	}

	renderGame()
}




// if(sum < 21){
// 	message = "Do you want to draw a new card?"

// }
// else if(sum === 21){
// 	message = "Woohooo!, You've got the blackjack!"
// 	hasBlackjack = true
// 	isAlive = true

// }
// else{
// 	message = "You're out of the game!"
// 	isAlive = false

// }