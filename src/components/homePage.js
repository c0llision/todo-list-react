import React from 'react';

import TodoTable from './todoTable';

class HomePage extends React.Component {
    render() {
        return (
            <div className="App">
                <TodoTable />
            </div>
        );
    }
}

export default HomePage;