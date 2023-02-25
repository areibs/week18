import React from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class Password extends React.Component {
    render () {
        return (
            <Row>
                <Form.Label column="lg">Password</Form.Label>
                <Col>
                    <Form.Control
                    autoComplete="on"
                    type="password"
                    placeholder="Password"
                    />
                 </Col>
            </Row>
        );
        
    }
}