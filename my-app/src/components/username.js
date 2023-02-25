import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Username extends React.Component {
    render() {
        return (
            <Row>
                <Form.Label column="lg">Username</Form.Label>
                <Col>
                    <Form.Control
                    autoComplete="on"
                    type="text"
                    placeholder="Enter Username"
                    />
                </Col>
            </Row>
        );
        
    }
}