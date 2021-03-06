import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import AddTaskPage from './components/addTaskPage';
import HomePage from './components/homePage';
import TodoPage from './components/todoPage';

import { Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Todo List</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/add-task">Add Task</Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/add-task" component={AddTaskPage}/>
        <Route path="/todo/:id" component={TodoPage}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
