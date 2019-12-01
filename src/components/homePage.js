import React from 'react';

import TodoTable from './todoTable';

import Alert from 'react-bootstrap/Alert';

class HomePage extends React.Component {
    render() {
        // try load list id from LS
        let listId = localStorage.getItem('listId');

        // no list id found, generate a new one
        if (listId === null) {
            var uuid = require("uuid");
            listId = uuid.v4();
            localStorage.setItem('listId', listId);

        }

        return (
            <div className="App">
                <br />
                <Alert style={{width:'800px', margin:'auto'}} variant="primary">
                Get back to this todo list by bookmarking the following url:<br />
                http://localhost:4000/todo/{listId}
                </Alert>
                <br />
                <TodoTable listId={listId} />
            </div>
        );
    }
}

export default HomePage;
