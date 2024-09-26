const choices = ["rock", "paper", "scissor"];

const getComputerChoice = () => {
  const comRNG = Math.floor(Math.random() * 3);
  return choices[comRNG];
};

let humanScore = 0;
let comScore = 0;

const getHumanChoice = () => {
  // let playerChoice = prompt(`Input either Rock, Paper or Scissor`);
  // if (choices.includes(playerChoice.toLowerCase())) {
  //   return playerChoice.toLowerCase();
  // } else {
  //   alert(`Error Input is Wrong!\nPlease Enter the correct Input`);
  //   return getHumanChoice();
  // }
};

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

const playGame = (button) => {
  const humanChoice = button.id.toLowerCase();
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  let score = document.querySelector(".score")
  score.textContent = `Score\nHuman:${humanScore}\nComputer:${comScore}`;
  
  // // for (let i = 1; i <= 5; i++) {
  // const humanChoice = getHumanChoice();
  // const computerChoice = getComputerChoice();
  // //   playRound(humanChoice, computerChoice);
  // // }
  // alert(`The score is\nHuman:${humanScore}\nComputer:${comScore}`);
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button);
  });
});
