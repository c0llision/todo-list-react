console.log(`
 _____         _         _     _     _
|_   _|__   __| | ___   | |   (_)___| |_
  | |/ _ \\ / _\` |/ _ \\  | |   | / __| __|
  | | (_) | (_| | (_) | | |___| \\__ \\ |_
  |_|\\___/ \\__,_|\\___/  |_____|_|___/\\__|
`);


const mongoose = require('mongoose');
const express = require('express')
const app = express()
var path = require('path');
const port = 4000


const url = `http://localhost:4000/`
var opn = require('opn');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// serve react files
app.use(express.static(path.join(__dirname, '../build')));

// Connect to mongodb
mongoose.connect('mongodb+srv://user:pLpy6uTQY2RFKNJt@cluster0-i1an0.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, '[ERROR] MongoDB connection error:'));
db.once('open', function() {
    console.log("MongoDB connected");
});
mongoose.set('useFindAndModify', false); // get rid of deprecation warning


// MongoDB schemas
var Task = mongoose.model('Tasks', new mongoose.Schema({
  taskName: String,
  dueDate: Date,
  status: String,
  listId: String
}));


app.get('/api/tasks/:id', (req, res) => {
    Task.find({listId: req.params.id}, function (err, tasks) {
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
        listId: req.body.listId,
        taskName: req.body.taskName,
        dueDate: req.body.dueDate,
        status: req.body.status
    });

    console.log("\nNew task added: ");
    console.log("Task Name: " + req.body.taskName);
    console.log("Due Date: " + req.body.dueDate);
    console.log("Status: " + req.body.status);
    console.log("id: " + req.body.listId);

    res.json("Data uploaded");
})


app.delete('/api/tasks/:id', (req, res)=>{
    Task.deleteOne({_id:req.params.id}, (err, data)=>{
        res.json(data);
    });
    console.log("Task deleted, id: " + req.params.id);
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
});

app.listen(port, () => {
    console.log(`Todo List backend server listening on ${url}`)
    opn(url);
})

