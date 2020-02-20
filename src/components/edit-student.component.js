import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {
    constructor(props) {
        super(props);

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollNo = this.onChangeStudentRollNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Initial state
        this.state = {
            name: '',
            email: '',
            rollno: ''
        }
    }

    componentDidMount() {
        console.log(this);
        axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                name: response.data.name,
                email: response.data.email,
                rollno: response.data.rollno
            });
        }).catch(error => {
            console.log(error);
        });
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
        // console.log(event);
        // Stops the default link behaviour of opening a new page
        event.preventDefault();

        const studentObject = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno
        };

        axios.put('http://localhost:4000/students/update-student/' + this.props.match.params.id, studentObject)
        .then(response => {
            console.log(response.data);
            console.log('Student update: SUCCESS!')
        }).catch(error => {
            console.log(error);
        });

        // Redirect to Student List
        this.props.history.push('/student-list');
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Roll No</Form.Label>
                        <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollNo}></Form.Control>
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Update Student
                    </Button>
                </Form>
            </div>
        );
    }
}