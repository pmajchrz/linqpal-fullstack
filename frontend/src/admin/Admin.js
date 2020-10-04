import React from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';
import {connect} from "react-redux";
import {fetchItems} from "./adminService";
import {getItems} from "./redux/selectors";

class Login extends React.Component {

    componentDidMount() {
        const {fetchItems} = this.props;
        fetchItems();

        this.renderData = this.renderData.bind(this);
    }

    renderData() {
        const {items} = this.props;

        return (
            <tbody>
            {items.map(item => {
                return (<tr key={`item-${item.id}-${Date.now()}`}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phoneNo}</td>
                    <td>{item.address}</td>
                    <td>{item.ssn}</td>
                </tr>)
            })}
            </tbody>
        )
    }

    render() {
        return (<Container fluid>
                <Row className='vh-100 justify-content-center align-content-center'>
                    <Col xs={4} className='align-items-center'>
                        <Table>
                            <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>SSN</th>
                            </tr>
                            </thead>
                            {this.renderData()}
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }

}

Login = connect((state) => ({
    items: getItems(state)
}), {fetchItems})(Login);

export default Login;