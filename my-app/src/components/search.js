import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SearchButton from './searchButton';
import NavigationBar from './navbar';

export default class Search extends React.Component {
    render() {
        return (
            <Container>
            <NavigationBar />
            <Row>
                <Form.Label column="lg">Search for a song!</Form.Label>
                <Col>
                    <Form.Control
                    autoComplete="on"
                    type="text"
                    placeholder="Enter Song or Artist Name"
                    />
                </Col>
                <button type="submit" className="btn btn-dark">Search</button>
            </Row>
            </Container>
           
        );
        
    }
}