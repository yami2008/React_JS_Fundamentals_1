// src/App.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "John"; // Replace with your first name or leave as an empty string

  return (
      <Container className="my-4">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Image />
            <Card.Title><Name /></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><Price /></Card.Subtitle>
            <Card.Text>
              <Description />
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="mt-3">
          {firstName ? (
              <>
                <h3>Hello, {firstName}!</h3>
                <img src="https://via.placeholder.com/100" alt="Greeting" />
              </>
          ) : (
              <h3>Hello, there!</h3>
          )}
        </div>
      </Container>
  );
};

export default App;
