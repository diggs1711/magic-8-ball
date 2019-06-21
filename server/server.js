const express = require('express');
const app = express();
const cors = require('cors');
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const n_cpus = os.cpus().length;
    console.log("hello", n_cpus)
    for (let i = 0; i < n_cpus; i++) {
        cluster.fork();
    }
} else {
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
        console.log("done");
    }, (err) => {
        console.log("error", err)
    })

    app.listen(3001, () => {
        console.log("listening")
    });
}