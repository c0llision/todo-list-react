import React from 'react';
import TodoItem from './todoItem';
import axios from 'axios';

class TodoItems extends React.Component {
    state = {
        tasks: [ ]
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/tasks')
        .then(res => {
            this.setState({ tasks: res.data});
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            this.state.tasks.map((t) => {
                return <TodoItem tasks={t}></TodoItem>
            }))
    }
}

export default TodoItems;
