import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

class AddTaskPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            dueDate: new Date()
        };

        this.handleTaskName = this.handleTaskName.bind(this);
        this.handleDueDate = this.handleDueDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }

    handleTaskName(event) {
        this.setState({taskName: event.target.value});
    }

    handleDueDate(date) {
        this.setState({dueDate: date});
    }


    handleSubmit(event) {

        this.submitTask({
            taskName: this.state.taskName,
            dueDate: this.state.dueDate
        })

        event.preventDefault();
    }

    submitTask(taskData) {
        axios.put('http://localhost:4000/api/add-task', taskData)
        .then()
        .catch();
    }

    render() {
        return (
            <div className="App">
                <br />
                <h1>Add new task</h1>
                <Form style={{width:500, margin:"auto"}} onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" value={this.state.taskName} onChange={this.handleTaskName}  placeholder="Enter task name" />
                    <Form.Text className="text-muted">
                        Give your task a descriptive name
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Due date: </Form.Label>
                    <Form.Label>
                     <DatePicker selected={this.state.dueDate} onChange={this.handleDueDate} />
                    </Form.Label>
                    <Form.Text className="text-muted">
                        This is optional
                    </Form.Text>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
            </div>
        );
    }
}

export default AddTaskPage;
