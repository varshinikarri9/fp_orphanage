import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import './Donate.css';

const Donate = () => {
  const [showModal, setShowModal] = useState(false);
  const [donationType, setDonationType] = useState('');

  const handleShowModal = (type) => {
    setDonationType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDonationType('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for your ${donationType} donation!`);
    handleCloseModal();
  };

  return (
    <Container className="donate-container my-5">
      <h1 className="text-center mb-5">Donate to ASHAKUTEER Orphanage</h1>
      <Row>
        <Col md={4}>
          <Card className="donation-card">
            <Card.Body>
              <Card.Title>Monthly Donation</Card.Title>
              <Card.Text>
                Support us with a monthly donation to help cover daily expenses and provide essentials for the children.
              </Card.Text>
              <Button variant="primary" className="w-100" onClick={() => handleShowModal('Monthly')}>Donate $20/month</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="donation-card">
            <Card.Body>
              <Card.Title>Annual Donation</Card.Title>
              <Card.Text>
                Make a yearly commitment to support the orphanage and contribute towards larger projects and improvements.
              </Card.Text>
              <Button variant="primary" className="w-100" onClick={() => handleShowModal('Annual')}>Donate $200/year</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="donation-card">
            <Card.Body>
              <Card.Title>One-Time Donation</Card.Title>
              <Card.Text>
                Every little bit helps! Make a one-time donation to support the immediate needs of the children.
              </Card.Text>
              <Button variant="primary" className="w-100" onClick={() => handleShowModal('One-Time')}>Donate $50</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2 className="text-center my-5">Donate Items</h2>
      <Row>
        <Col md={4}>
          <Card className="donation-card">
            <Card.Body>
              <Card.Title>School Supplies</Card.Title>
              <Card.Text>
                Help provide essential school supplies like notebooks, pencils, and backpacks for the children.
              </Card.Text>
              <Button variant="secondary" className="w-100" onClick={() => handleShowModal('School Supplies')}>Donate Supplies</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="donation-card">
            <Card.Body>
              <Card.Title>Clothing</Card.Title>
              <Card.Text>
                Donate new or gently used clothing to keep the children well-dressed throughout the year.
              </Card.Text>
              <Button variant="secondary" className="w-100" onClick={() => handleShowModal('Clothing')}>Donate Clothing</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="donation-card">
            <Card.Body>
              <Card.Title>Toys and Books</Card.Title>
              <Card.Text>
                Bring joy to the children with toys and books that help them learn and play.
              </Card.Text>
              <Button variant="secondary" className="w-100" onClick={() => handleShowModal('Toys and Books')}>Donate Toys and Books</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Donation Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Donate {donationType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter amount" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Donate
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Donate;
