import React, {Component} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';

export default class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/students/')
        .then(response => {
            this.setState({
                students: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }

    DataTable() {
        return this.state.students.map((response, index) => {
            return <StudentTableRow obj={response} key={index} />;
        });
    }
    
    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        );
    }
}