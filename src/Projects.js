import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
class Projects extends Component {

     constructor(props){
            super(props);
            this.state = {
                projects :[ {
                    project1 :"Android task monitoring",
                    project2: 'Fingerprint voting system',
                    project3 :"Weather forecasting system",
                            }
                        ]
                    }
                }
                render() {
                 return (
                    <div>
                         <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>pro1</th>
                                    <th>pro2</th>
                                    <th>pro3</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.projects.map((item,index) => {
                                return( 
                                <tr key={index}>
                                    <td>{item.project1}</td>
                                    <td>{item.project2}</td>
                                    <td>{item.project3}</td>
                                </tr> 
                            )})}  
                            </tbody> 
                        </Table>
                     </div>
                    );
                }
           }
        export default Projects;
                          