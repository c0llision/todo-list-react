import React from 'react';

import Table from 'react-bootstrap/Table';

class TodoTable extends React.Component {
    render() {
        return (
            <div className="App">
              <br />
              <Table striped bordered hover style={{width: 800, margin:"auto"}}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </div>
        );
    }
}

export default TodoTable;
