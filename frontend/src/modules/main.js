

var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var opponentChoiceText = "";
var playerName = "";
var opponentName = "Dator";
var playerScore = 0;
var choices = ["rock", "paper", "scissors"];
const playerName_span = document.getElementById('playerList');

function updatePlayerList() {
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
  console.log('Min kod körs');

  for (let i = 0; i < choices.length; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
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
  console.log('Spelaren valde: ' + you);
  document.getElementById("your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  
  setTimeout(function () {
    document.getElementById("opponent-choice-text").innerText = `Dator valde: ${opponent}`;
  }, 1000);
 
   if (you == opponent) {
    
  }  else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourScore += 1;
      } else if (opponent == "paper") {
        opponentScore += 1;
        opponentChoiceText = "påse";
        if (opponentScore === 1) {
         
          setTimeout(resetGame, 2000);
        }
      }
    } else if (you == "scissors") {
      if (opponent == "paper") {
        yourScore += 1;
      } else if (opponent == "rock") {
        opponentScore += 1;
        opponentChoiceText = "sten";
        if (opponentScore === 1) {
         
          setTimeout(resetGame, 2000);
        }
      }
    } else if (you == "paper") {
      if (opponent == "rock") {
        yourScore += 1;
      } else if (opponent == "scissors") {
        opponentScore += 1;
        opponentChoiceText = "sax";
        
        if (opponentScore === 1) {
          
          setTimeout(resetGame, 2000);
        }
      } 
      

    }
  }  

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





  document.getElementById("your-score").innerText = yourScore;
}

function setPlayerName() {
  var inputElement = document.getElementById("name-input");
  playerName = inputElement.value;
  console.log('Spelarens namn är satt till: ' + playerName);
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
