import React from 'react';
import Table from 'react-bootstrap/Table';
import TodoItems from './todoItems';


class TodoTable extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (

            <div className="App">
              <Table striped bordered hover style={{width: 800, margin:"auto"}}>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TodoItems listId={this.props.listId}></TodoItems>
                </tbody>
              </Table>
            </div>
        );
    }
}

export default TodoTable;
