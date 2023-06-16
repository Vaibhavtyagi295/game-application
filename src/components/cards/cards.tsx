import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';

function Cards() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 20px' }}>
      <CardGroup style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="success">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="success">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="success">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
          <Card.Body>
            <Card.Title>Card 4</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="success">Go somewhere</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Cards;
