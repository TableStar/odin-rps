const choices = ["rock", "paper", "scissor"];

const getComputerChoice = () => {
  const comRNG = Math.floor(Math.random() * 3);
  return choices[comRNG];
};

const getHumanChoice = () => {
  let playerChoice = prompt(`Input either Rock, Paper or Scissor`);
  if (choices.includes(playerChoice.toLowerCase())) {
    return playerChoice.toLowerCase();
  } else {
    alert(`Error Input is Wrong!\nPlease Enter the correct Input`);
    return getHumanChoice();
  }
};

const playGame = () => {
  let humanScore = 0;
  let comScore = 0;
  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      alert("it ties");
    } else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        comScore++;
        alert("You lose! Paper beat Rock");
      } else if (computerChoice === "scissor") {
        humanScore++;
        alert("You Win! Rock beat Scissor");
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "scissor") {
        comScore++;
        alert("You lose! Scissor beat Paper");
      } else if (computerChoice === "rock") {
        humanScore++;
        alert("You Win! Paper beat Rock");
      }
    } else if (humanChoice === "scissor") {
      if (computerChoice === "rock") {
        comScore++;
        alert("You lose! Rock Beat Scissor");
      } else if (computerChoice === "paper") {
        humanScore++;
        alert("You Win! Scissor beat Paper");
      }
    }
  };
  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  alert(`The score is\nHuman:${humanScore}\nComputer:${comScore}`);
};
playGame();
