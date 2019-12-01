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
mongoose.connect('mongodb+srv://user:pLpy6uTQY2RFKNJt@cluster0-i1an0.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, '[ERROR] MongoDB connection error:'));
db.once('open', function() {
    console.log("MongoDB connected");
});
mongoose.set('useFindAndModify', false); // get rid of deprecation warning


// CORS Header
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


// MongoDB schemas
var Task = mongoose.model('Tasks', new mongoose.Schema({
  taskName: String,
  dueDate: Date,
  status: String
}));

app.get('/', (req, res) => res.send('Todo list backend server'))

app.get('/api/tasks', (req, res) => {
    Task.find({}, function (err, tasks) {
        if (err) return handleError(err);
        res.json(tasks);
    })
})


app.post('/api/tasks', (req, res) => {
    Task.findByIdAndUpdate(req.body._id,
        req.body,
        {new:true},
        (error, data)=>{
            res.json(data);
        });

    console.log("Task updated, name: " + req.body.taskName);
    console.log(req.body);
})

app.put('/api/tasks', (req, res) => {
    Task.create({
        taskName: req.body.taskName,
        dueDate: req.body.dueDate,
        status: req.body.status
    });

    console.log("\nNew task added: ");
    console.log("Task Name: " + req.body.taskName);
    console.log("Due Date: " + req.body.dueDate);
    console.log("Status: " + req.body.status);

    res.json("Data uploaded");
})


app.delete('/api/tasks/:id', (req, res)=>{
    Task.deleteOne({_id:req.params.id}, (err, data)=>{
        res.json(data);
    });
    console.log("Task deleted, id: " + req.params.id);
})

app.listen(port, () => {
    console.log(`Todo List backend server listening on ${url}`)
    opn(url);
})

