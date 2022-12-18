import React, { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');

  const handleChange = event => {
    setUrl(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/', {
        url: url
      })
      .then(response => {
        setResult(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const resetForm = () => {
    setUrl('');
    setResult('');
  };

  return (
    <Container>
      <div>
        <h1 className="title">Phishing URL checker</h1>
      </div>

      <div className="content">
        <Form.Label htmlFor="basic-url">Enter URL</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            id="basic-url"
            aria-describedby="basic-addon3"
            value={url}
            onChange={handleChange}
          />
        </InputGroup>

        <div className="box">
          <Button variant="secondary" size="lg" onClick={resetForm}>
            Reset
          </Button>{' '}
          <Button variant="success" size="lg" onClick={handleSubmit}>
            Submit
          </Button>{' '}
        </div>
        {result && <Alert variant="info">{result}</Alert>}
      </div>
    </Container>
  );
}

export default App;