import React, { useState } from 'react';
import { Container, Carousel, Modal, Button, Form } from 'react-bootstrap';
import './Home.css';
import pic from "../images/orpg.jpeg";
import pic2 from "../images/image.png";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    setIsAuthenticated(true);
    setShowLogin(false);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration
    setIsAuthenticated(true);
    setShowRegister(false);
  };

  return (
    <div>
      <div className="jumbotron text-center">
        <Container>
          <h1>Welcome to ASHA KUTEER Orphanage</h1>
          <p>This is the home page.</p>
          {!isAuthenticated && (
            <>
              <Button className='me-5' variant="primary" onClick={handleLoginShow}>Login</Button>
              <Button variant="secondary" onClick={handleRegisterShow} className="ml-2">Register</Button>
            </>
          )}
        </Container>
      </div>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="founder-info my-5 text-center">
          <h2>Meet the Founder</h2>
          <p>Our founder, Jane Doe, has dedicated her life to helping children in need.</p>
          <img src="https://static.toiimg.com/thumb/msid-97435009,width-400,resizemode-4/97435009.jpg" alt="Founder" className="founder-img"/>
        </div>
        <div className="live-stats text-center">
          <h2>Live Statistics</h2>
          <div className="stats">
            <div className="stat">
              <h3>Children Residing</h3>
              <p className="count">150</p>
            </div>
            <div className="stat">
              <h3>Donations Received</h3>
              <p className="count">300</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" required />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Register Modal */}
      <Modal show={showRegister} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRegisterSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" required />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
