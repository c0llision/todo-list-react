import React from 'react';

import TodoTable from './todoTable';

class TodoPage extends React.Component {

    componentDidMount() {
        localStorage.setItem('listId', this.props.match.params.id);
    }
    render() {
        return (
            <div className="App">
                <br />
                <TodoTable listId={this.props.match.params.id} />
            </div>
        );
    }
}

export default TodoPage;

