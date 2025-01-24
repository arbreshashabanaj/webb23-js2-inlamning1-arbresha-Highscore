import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';

var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var opponentChoiceText = "";
var playerName = "";
var opponentName = "Dator";
var playerScore = 0;
var choices = ["rock", "paper", "scissors"];
var choicesIMG = [rock, paper, scissors];
const imageMap = { rock, paper, scissors };

function updatePlayerList() {
  const playerName_span = document.getElementById('playerList');
  playerName_span.textContent = `Spelare: ${playerName} | Poäng: ${playerScore}`;
}

function fetchHighscores() {
  fetch('http://localhost:3000/api/highscores')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayHighscores(data);
    })
    .catch((error) => {
      console.error('Något gick fel vid hämtning av highscore-data: ' + error);
    });
}

function displayHighscores(highscores) {
  const highscoreList = document.getElementById("highscore-list");
  highscoreList.innerHTML = "";

  for (let i = 0; i < highscores.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${highscores[i].name}: ${highscores[i].score}`;
    highscoreList.appendChild(listItem);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log('DOMContentLoaded event triggered');

  
  const choicesContainer = document.getElementById("choices");
  if (!choicesContainer) {
    console.error("Choices container not found in DOM!");
    return;
  }

  for (let i = 0; i < choices.length; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choicesIMG[i];
    choice.style.cursor = "pointer";
    choice.addEventListener("click", selectChoice);
    choicesContainer.append(choice);
  }

  
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    console.log('Spela-knappen klickad');
    startGame();
  });

  fetchHighscores();
});

function startGame() {
  setPlayerName();
  updatePlayerList();
  resetGame();
}

function selectChoice() {
  you = this.id;
  console.log('Spelaren valde:', you);

  
  document.getElementById("your-choice").src = imageMap[you];

  
  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = imageMap[opponent];
  document.getElementById("opponent-choice-text").innerText = `Dator valde: ${opponent}`;

 
  if (you === opponent) {
    console.log('Oavgjort!');
  } else if (
    (you === "rock" && opponent === "scissors") ||
    (you === "paper" && opponent === "rock") ||
    (you === "scissors" && opponent === "paper")
  ) {
    yourScore++;
    console.log('Spelaren vinner!');
  } else {
    opponentScore++;
    console.log('Datorn vinner!');
    setTimeout(resetGame, 2000);  
  }

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;

  
  saveHighscore();
}

function saveHighscore() {
  const newHighscore = {
    name: playerName,
    score: yourScore,
  };

  fetch('http://localhost:3000/api/highscores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newHighscore),
  })
    .then((response) => {
      if (response.status === 200) {
        console.log('Highscore sparad.');
        fetchHighscores(); 
      } else {
        console.error('Något gick fel när highscore skulle sparas.');
      }
    })
    .catch((error) => {
      console.error('Något gick fel vid kommunikation med servern: ' + error);
    });
}

function setPlayerName() {
  var inputElement = document.getElementById("name-input");
  playerName = inputElement.value;
  console.log('Spelarens namn är satt till:', playerName);
  var playerNameDisplay = document.getElementById("player-name-display");
  playerNameDisplay.innerText = "Spelare: " + playerName;
  updatePlayerList();
}

function resetGame() {
  yourScore = 0;
  opponentScore = 0;
  opponentChoiceText = "";
  console.log('Spelet är återställt');
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;
  document.getElementById("your-choice").src = "";
  document.getElementById("opponent-choice").src = "";
  updatePlayerList();
}

document.getElementById("name-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    setPlayerName();
  }
});
