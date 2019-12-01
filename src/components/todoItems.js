import React from 'react';
import TodoItem from './todoItem';
import axios from 'axios';

class TodoItems extends React.Component {
    state = {
        tasks: [ ],
    };

    componentDidMount() {
        // get tasks from backend
        axios.get('http://localhost:4000/api/tasks/' + this.props.listId)
        .then(res => {
            this.setState({ tasks: res.data});
        }).catch((err) => {
            console.log(err);
        });
    }

    constructor(props) {
        super();
    }
    render() {
        return (
            this.state.tasks.map((t) => {
                return <TodoItem tasks={t}></TodoItem>
            }))
    }
}

export default TodoItems;
