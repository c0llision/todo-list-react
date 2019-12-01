import React from 'react';
import Editable from 'react-x-editable';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

class TodoItem extends React.Component {
    state = {
        tasks: [ ]
    };

    componentDidMount() {
        this.setState(this.props.tasks);
        this.setState({dueDate: new Date(this.props.tasks.dueDate)});
        console.log(this.state.dueDate)
    }

    handleSubmit() {
        console.log(this.state);
        console.log(this.state.dueDate);
        axios.post('http://localhost:4000/api/tasks', this.state);
    }

    handleDueDate(date) {
        // only submit form when state guaranteed to be updated
        this.setState({dueDate: date}, this.handleSubmit);
    }

    handleDelete() {
        // we hide the deleted items by setting them deleted in state
        // render function checks this and doesn't render if set
        this.setState({deleted: true});
        axios.delete('http://localhost:4000/api/tasks/' + this.state._id);
    }

    constructor(props) {
        super(props);
        this.state = { _id: '',
            taskName: '',
            dueDate: new Date()


        };
        this.handleDueDate = this.handleDueDate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        if (this.state.deleted) {
            return ""
        }
        else {
            return (
              <tr>
                <td>
                    <Editable name="taskName" dataType="text" showButtons={false} mode="inline"
                        onInputChange={event => this.setState({taskName: event.target.value })}
                        value={this.state.taskName} handleSubmit={this.handleSubmit} />
                </td>
                <td>
                     <DatePicker selected={this.state.dueDate} style={{width:'20px'}} onChange={this.handleDueDate} />
                </td>
                <td>
                 <Editable dataType="select" name="status" mode="inline" value={this.state.status} showButtons={false}
                      options={[
                        {value : "Not done", text: "Not Done"},
                        {value : "In Progress", text: "In Progress"},
                        {value : "Complete", text: "Complete"},
                      ]}
                      onInputChange={event => this.setState({status: event.target.value})}
                      handleSubmit={this.handleSubmit} />
                </td>
                <td>

                <button type="button" class="close" aria-label="Close" onClick={this.handleDelete}>
                  <span aria-hidden="true">&times;</span>
                </button>
                </td>
              </tr>

            )
        }
    }

}

export default TodoItem;

