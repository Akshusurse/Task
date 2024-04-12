// components/RegisterForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { register } from '../services/auth';

const RegisterForm = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ name, dob, email, password });
      history.push('/login');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="dob">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};