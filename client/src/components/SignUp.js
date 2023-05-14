import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navigations from './Navbar';
import Footer from './Footer';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessCode, setBusinessCode] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (

    <div>
        <Navigations />
        <Container className="mt-5 login-height">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center">Signup</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="businessName">
              <Form.Label>Business Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="businessCode">
              <Form.Label>Business Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter business code"
                value={businessCode}
                onChange={(e) => setBusinessCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3 btn btn-primary bg-dark w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
        <Footer />
    </div>
  );
};

export default Signup;
