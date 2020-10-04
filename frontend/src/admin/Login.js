import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {connect} from "react-redux";
import {login} from "./adminService";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        const {login,history} = this.props;
        login(event.currentTarget).then(tkn => history.push('/admin'));

    }

    render() {
        return (<Container fluid>
                <Row className='vh-100 justify-content-center align-content-center'>
                    <Col xs={4} className='align-items-center'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="password"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

}

Login = connect(null, {login})(Login);

export default Login;