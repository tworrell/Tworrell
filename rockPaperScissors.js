//Tara Worrell- R,P,S @ 3/28/2020

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb') {
      return userInput;
      } else {
    console.log('You must make a choice to proceed.');
  };
}

let getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() *3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

let determineWinner = (userChoice, computerChoice) => {
  if(userChoice === 'bomb') {
    return 'Sneaky haha, You Won!'
  }
  if(userChoice === computerChoice) {
     return 'The game is Tie'
     }
  if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}

let playGame = () => {
  const userChoice = getUserChoice('paper');

  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`Your computer chose: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
};
playGame();
