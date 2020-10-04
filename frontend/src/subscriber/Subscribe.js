import React from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {subscribe} from "./subscriberService";

function Subscribe(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        subscribe(event.currentTarget);
    };

    return <Container fluid>
        <Row className='vh-100 justify-content-center align-content-center'>
            <Col xs={4} className='align-items-center'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group controlId="phoneNo">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea"/>
                    </Form.Group>
                    <Form.Group controlId="ssn">
                        <Form.Label>SSN</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>

}

export default Subscribe;