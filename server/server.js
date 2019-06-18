const express = require('express');
const app = express();
const cors = require('cors');

const fortunes = [
    "It is certain.",
    "As I see it, yes.",
    "Reply hazy, try again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "You may rely on it.",
    "Signs point to yes.",
    "Concentrate and ask again."
];

app.use(cors());
app.get('/api/fortune', function (req, res) {
    const rand = Math.floor(Math.random() * fortunes.length);
    res.json(fortunes[rand]);
})

app.listen(3001, () => {});