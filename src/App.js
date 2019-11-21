import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Todo List</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/add-task">Add Task</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default App;
