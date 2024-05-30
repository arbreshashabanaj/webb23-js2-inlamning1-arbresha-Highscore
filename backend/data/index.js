

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs'); 

app.use(cors());
app.use(express.json());

let highscores = [
    { "name": "Spelare 5", "score": 10 },
    { "name": "Spelare 4", "score": 8 },
    { "name": "Spelare 3", "score": 6 },
    { "name": "Spelare 2", "score": 4 },
    { "name": "Spelare 1", "score": 2 }
];

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Cache-Control', 'no-store'); 
    next();
});

app.get('/api/highscores', (req, res) => {
    res.json(highscores);
});

app.post('/api/highscores', (req, res) => {
    const { name, score } = req.body;

    const existingPlayer = highscores.find(player => player.name === name);

    if (existingPlayer) {
       
        if (score > existingPlayer.score) {
            existingPlayer.score = score;
        }
    } else {
        
        highscores.push({ name, score });
    }

    
    highscores.sort((a, b) => b.score - a.score);

    
    highscores.splice(5);

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
