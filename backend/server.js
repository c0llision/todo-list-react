const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000

app.use(express.urlencoded())
app.use(express.json())
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.get('/', (req, res) => res.send('Welcome to Data Representation & Querying'))


console.log(`
 _____         _         _     _     _
|_   _|__   __| | ___   | |   (_)___| |_
  | |/ _ \\ / _\` |/ _ \\  | |   | / __| __|
  | | (_) | (_| | (_) | | |___| \\__ \\ |_
  |_|\\___/ \\__,_|\\___/  |_____|_|___/\\__|
      `);

app.listen(port, () => console.log(`Todo List backend server listening on http://localhost:${port}/`))
