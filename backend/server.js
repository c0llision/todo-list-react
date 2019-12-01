console.log(`
 _____         _         _     _     _
|_   _|__   __| | ___   | |   (_)___| |_
  | |/ _ \\ / _\` |/ _ \\  | |   | / __| __|
  | | (_) | (_| | (_) | | |___| \\__ \\ |_
  |_|\\___/ \\__,_|\\___/  |_____|_|___/\\__|
`);


const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000

const url = `http://localhost:3000/`
var opn = require('opn');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());


// Connect to mongodb
// CORS Header
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.get('/', (req, res) => res.send('Welcome to Data Representation & Querying'))

app.put('/api/add-task', (req, res) => {
    console.log("Task Name: " + req.body.taskName);
    console.log("Due Date: " + req.body.dueDate);

    res.json("Data uploaded");
})


app.listen(port, () => {
    console.log(`Todo List backend server listening on ${url}`)
    opn(url);
})

