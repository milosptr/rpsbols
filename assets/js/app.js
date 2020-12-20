let playerScore = document.getElementById('player-score')
let computerScore = document.getElementById('computer-score')
let hands = document.querySelector('.hands')
let handOptions = document.querySelector('.hand-options')
let resultTitle = document.querySelector('.result-title')
const computerOptions = ["rock", "paper", "scissors", 'batman', 'ozzy', 'lizard', 'spock']

const game = () => {
  let pScore = 0
  let cScore = 0

  handOptions.addEventListener('click', (e) => {
    const playerOption = e.target.id
    const computerOption= computerOptions[Math.floor(Math.random() * 7)]
    hands.classList.add('shake')

    setTimeout(() => {
      hands.classList.remove('shake')
      hands.children[0].src = `assets/img/${playerOption}.png`
      hands.children[1].src = `assets/img/${computerOption}.png`
      compareHands(playerOption, computerOption)
    }, 1800);
  })


  const  compareHands = (player, computer) => {
    let winner = 'player'

    switch(player) {
      case 'rock':
        if(computer !== 'batman' && computer !== 'scissors' && computer !== 'lizard')
          winner = 'computer'
      case 'paper':
        if(computer !== 'rock' && computer !== 'ozzy' && computer !== 'spock')
          winner = 'computer'
      case 'scissors':
        if(computer !== 'paper' && computer !== 'ozzy' && computer !== 'lizard')
          winner = 'computer'
      case 'batman':
        if(computer !== 'scissors' && computer !== 'ozzy' && computer !== 'spock')
          winner = 'computer'
      case 'ozzy':
        if(computer !== 'rock' && computer !== 'paper' && computer !== 'lizard')
          winner = 'computer'
      case 'lizard':
        if(computer !== 'paper' && computer !== 'batman' && computer !== 'spock')
          winner = 'computer'
      case 'spock':
        if(computer !== 'rock' && computer !== 'scissors' && computer !== 'ozzy')
          winner = 'computer'
      default:
        if(player === computer)
          winner = 'tie'
        else
          winner = 'player'
    }


    if(winner === 'player') {
      pScore += 1
      resultTitle.innerText = 'Player Wins'
    }

    if(winner === 'computer') {
      cScore += 1
      resultTitle.innerText = 'Computer Wins'
    }

    if(winner === 'tie') {
      resultTitle.innerText = 'It\'s a tie'
    }
    updateScore()
  }

  const updateScore = () => {
      playerScore.innerText = pScore
      computerScore.innerText = cScore
  }
}

//start the game function
game();
