import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
class Department extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departmentdetails : [

                   {
                            id : 101,
                departmentname : "Finance Department",
                   },

                   {
                            id : 102,
                departmentname : "Purchase Department",
                   },

                   {
                             id : 103,
                 departmentname : "Marketing Department"
                   },
        ]
        }
    }
    
    render() {
        return (
                    <div>
                        <Table striped bordered hover variant="dark">
                              <thead>
                                    <tr>
                                      <th>Id</th>
                                      <th>Name</th>
                                    </tr>
                              </thead>
                                    <tbody>
                                             {this.state.departmentdetails.map(item => {
                                                return (
                                                      <tr key={item.id}>
                                                          <td>{item.id}</td>
                                                          <td>{item.departmentname}</td>
                                                      </tr>
                                              )})}
                                    </tbody> 
                            </Table>
                    </div>
                 );
             }
         }
export default Department;           
           
                   

            
                