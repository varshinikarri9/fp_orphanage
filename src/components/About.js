import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container className="about-container">
      <h1 className="text-center my-5">About Us</h1>
      <Row className="mb-5">
        <Col md={6}>
          <img 
            src="https://www.gujaratsahay.org/wp-content/uploads/2022/03/child-orphanage-in-ahmedabad.png" 
            alt="Orphanage Building" 
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>
            At our orphanage, we strive to provide a safe and nurturing environment for children in need. 
            Our mission is to offer care, education, and opportunities for a better future.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <h2>Our History</h2>
          <p>
            Established in 2000, our orphanage has been home to over 500 children. With the support of 
            our dedicated staff and generous donors, we have been able to make a significant impact on 
            the lives of many children.
          </p>
        </Col>
        <Col md={6}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8NCdQ8-iKBZhGIfHsn4wVJecXG-zBip1mw&s" 
            alt="Orphanage History" 
            className="img-fluid rounded " width="300px"
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Community Support" 
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2>Community Support</h2>
          <p>
            Our success is largely due to the incredible support we receive from the community. 
            Volunteers, donors, and local businesses have all played a crucial role in helping us 
            achieve our goals.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

