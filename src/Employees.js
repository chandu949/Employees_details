import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details : [
                       {Id : 101,
                  Employee : "Chandu",
                  Email    : "chanduindia1996@gamil.com",
                  location : "Hyderabad",
                  salary   : "4LPA",
                       },

                       {Id : 102,
                  Employee : "Naresh",
                  Email    : "nareshmaloth@gmail.com",
                  location : "Banglore",
                  salary   : "24LPA"
                     },

                     {Id : 103,
                Employee : "Pavan",
                Email    : "pavan123@gmail.com",
                location : "Noida",
                salary   : "14LPA",
                             }
                ]
        }
    }

 render() {
        // const {details} = this.state;
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Employee</th>
                            <th>Email</th>
                            <th>location</th>
                            <th>salary</th>
                       </tr>
                    </thead>
                     <tbody>
                        {this.state.details.map(item => {
                            return (<tr key= {item.Id}>
                                <td>{item.Id}</td>
                                <td>{item.Employee}</td>
                                <td>{item.Email}</td>
                                <td>{item.location}</td>
                                <td>{item.salary}</td>
                            </tr>)
                        })}
                     </tbody>
               </Table>
          </div>
        );
    }
}
export default Employees;
