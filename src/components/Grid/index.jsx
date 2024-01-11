import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyGrid = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>Columna 1</Col>
                <Col md={4}>Columna 2</Col>
                <Col md={4}>Columna 3</Col>
            </Row>
            <Row>
                <Col md={6}>Columna 4</Col>
                <Col md={6}>Columna 5</Col>
            </Row>
        </Container>
    );
};

export default MyGrid;