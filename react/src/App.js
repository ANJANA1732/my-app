import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import InputGroup from 'react-bootstrap/InputGroup'
import  Alert  from 'react-bootstrap/Alert';

function App() {
  return (
    <Container>
    <div>
      <h1 className="title">Phishing URL checker</h1>
    
    </div>

    <div className="content">

    <Form.Label htmlFor="basic-url">Enter URL</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control id="basic-url" aria-describedby="basic-addon3"/>
      </InputGroup>
      
      <Row>
        
        <Col>
        
        <Button variant="secondary" size="lg">Reset</Button>{' '}
        </Col>
        
        <Col>
      <Button variant="success" size="lg">Submit</Button>{' '}
      
      </Col>
      </Row>
      </div>
   
    
 
    </Container>
  )
}

export default App;
