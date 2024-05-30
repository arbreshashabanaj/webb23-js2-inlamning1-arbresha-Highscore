



/* 
  // Globala variabler och konstanter
 var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var opponentChoiceText = "";
var playerName = "Spelare";
var opponentName = "Dator";
var playerScore = 0;
var choices = ["rock", "paper", "scissors"];
var winningScore = 5; // Poäng för att vinna
var highscores = []; 



function startGame() {
  setPlayerName();
  resetGame();
}


// Hämta knappen med hjälp av id
var playButton = document.getElementById("play-button");

// Lägg till en händelselyssnare för knappen
playButton.addEventListener("click", function() {
  startGame();
});

// Funktion som körs när sidan har laddats
window.onload = function () {
  // Skapa spelalternativ (sten, sax, påse)
  for (let i = 0; i < choices.length; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
  // Uppdatera highscore-listan från backend
  fetchHighscores();
};

// Funktion för att välja ett alternativ
function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you == opponent) {
    // Oavgjort, inga poäng tilldelas
  } else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourScore += 1;
      } else if (opponent == "paper") {
        opponentScore += 1;
        opponentChoiceText = "påse";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "scissors") {
      if (opponent == "paper") {
        yourScore += 1;
      } else if (opponent == "rock") {
        opponentScore += 1;
        opponentChoiceText = "sten";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "paper") {
      if (opponent == "rock") {
        yourScore += 1;
      } else if (opponent == "scissors") {
        opponentScore += 1;
        opponentChoiceText = "sax";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    }
  }

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText; 

  /// Kolla om spelet är klart
  checkGameStatus();   
} 

 // Funktion för att nollställa spelet
function resetGame() {

 


  yourScore = 0;
  opponentScore = 0;
  opponentChoiceText = "";
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;
  document.getElementById("your-choice").src = "";
  document.getElementById("opponent-choice").src = "";
}

// Funktion för att sätta spelarens namn
function setPlayerName() {
  var inputElement = document.getElementById("name-input");
  playerName = inputElement.value;
  playerName = document.getElementById("name-input").value;  
  var playerNameDisplay = document.getElementById("player-name-display");
  playerNameDisplay.innerText = "Spelare: " + playerName;

 // Nu kan du anropa updateHighscoreList() här för att uppdatera highscore-listan med spelarens namn.
 updateHighscoreList();


}











// Funktion för att hämta highscores från backend
function fetchHighscores() {
  fetch('http://localhost:3000/api/highscores')
    .then(response => response.json())
    .then(data => {
      highscores = data;
      updateHighscoreList();
    })
    .catch(error => {
      console.error(error);
    });
} 






/* // Funktion för att uppdatera highscore-listan på sidan
function updateHighscoreList() {
  console.log("updateHighscoreList() körs"); // Lägg till detta för att testa



  console.log("Före uppdatering - playerName:", playerName);
  console.log("Före uppdatering - yourScore:", yourScore);
  
  // Uppdatera playerName och yourScore här
  
  console.log("Efter uppdatering - playerName:", playerName);
  console.log("Efter uppdatering - yourScore:", yourScore);
  










  var highscoreList = document.getElementById("highscore-list");
  highscoreList.innerHTML = "";

  // Sortera highscores i fallande ordning baserat på poäng
  highscores.sort((a, b) => b.score - a.score);

  // Visa de fem bästa highscores
  for (var i = 0; i < Math.min(highscores.length, 5); i++) {
    var listItem = document.createElement("li");
    listItem.innerText = `${highscores[i].name}: ${highscores[i].score}`;
    highscoreList.appendChild(listItem);
  }

  // Lägg till spelarens namn och poäng om de är bland de bästa
  var playerIndex = highscores.findIndex(entry => entry.name === playerName);
  if (playerIndex !== -1) {
    var playerListItem = document.createElement("li");
    playerListItem.innerText = `${playerName}: ${yourScore}`;
    highscoreList.appendChild(playerListItem);
  }
}  */

// Funktion för att uppdatera highscore-listan på sidan
/* function updateHighscoreList() {
  var highscoreList = document.getElementById("highscore-list");
  highscoreList.innerHTML = ""; // Rensa innehållet i listan

  // Sortera highscores i fallande ordning baserat på poäng
  highscores.sort((a, b) => b.score - a.score);

  // Loopa igenom highscores och skapa listelement för varje post
  for (var i = 0; i < Math.min(highscores.length, 5); i++) {
    var listItem = document.createElement("li");
    listItem.innerText = `${highscores[i].name}: ${highscores[i].score}`;
    highscoreList.appendChild(listItem);
  }

  // Lägg till spelarens namn och poäng om de är bland de bästa
  var playerIndex = highscores.findIndex(entry => entry.name === playerName);
  if (playerIndex !== -1) {
    var playerListItem = document.createElement("li");
    playerListItem.innerText = `${playerName}: ${yourScore}`;
    highscoreList.appendChild(playerListItem);
  }
}








 // Funktion för att kolla om spelet är klart
function checkGameStatus() {
  if (yourScore === winningScore) {
    // Spelaren har vunnit, uppdatera highscores och skicka till backend
    highscores.push({ name: playerName, score: yourScore });
    fetch('http://localhost:3000/api/highscores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(highscores)   
    
     })
      .then(response => response.json())
      .then(data => {
        // Highscores har uppdaterats på backend
        fetchHighscores(); // Hämta de senaste highscores från backend

        /* // Visa vinnarmeddelande
        var winnerName = `Grattis, ${playerName}! Du vann!`;
        document.getElementById("winner").innerText = "Vinnare: " + winnerName; */
      

       // Uppdatera highscore-listan på sidan igen
      /*   updateHighscoreList();
      
      
      
      
      }) 

       .catch(error => {
        console.error(error);
      });
  } else if (opponentScore === 1) {
    // Datorn har vunnit en omgång, nollställ spelet
    resetGame();
  }
}  

 






// Lägg till en händelselyssnare för "keydown" -händelsen på textinmatningsfältet
document.getElementById("name-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    setPlayerName();
  }
}); 
  */



















 










 


































