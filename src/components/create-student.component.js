import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {
    constructor(props) {
        super(props);

        // Set up the functions
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollNo = this.onChangeStudentRollNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Set the initial state
        this.state = {
            name: '',
            email: '',
            rollno: ''
        }
    }

    // Helper Functions
    onChangeStudentName(event) {
        this.setState({name: event.target.value});
    }

    onChangeStudentEmail(event) {
        this.setState({email: event.target.value});
    }

    onChangeStudentRollNo(event) {
        this.setState({rollno: event.target.value});
    }

    onSubmit(event) {
        // Stops the default link behaviour of opening a new page
        event.preventDefault();

        // console.log(`Student Successfully Created!`);
        // console.log(`Name: ${this.state.name}`);
        // console.log(`Email: ${this.state.email}`);
        // console.log(`Roll No: ${this.state.rollno}`);
        const studentObject = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno
        };
        
        // Axios post request
        axios.post('http://localhost:4000/students/create-student', studentObject)
        .then(response => console.log(response.data));

        this.setState({name: '', email: '', rollno: ''});
    }

    render() {
        return (
            <div className="form-wrapper">
                {/* Referencing the onSubmit method on CreateStudent */}
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="RollNo">
                        <Form.Label>Roll No</Form.Label>
                        <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollNo}></Form.Control>
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Create Student
                    </Button>
                </Form>
            </div>
        );
    }
}