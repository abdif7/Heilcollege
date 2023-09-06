import React from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Styles.css"

const MainPage = () => {
  return (
 <div>
    <div className="photo">
      <p><h1>Welcome to Heil College!</h1>
        Where knowledge meets opportunity, and dreams take flight. Our mission is to empower and inspire the leaders of tomorrow. Explore our programs, connect with our vibrant community, and embark on a journey of lifelong learning.
                     Discover, Dream, Achieve.
        Start your educational adventure with us today."
        Feel free to customize this message to suit the specific tone and values of your college.</p>
    </div>
    <Row>
       <Col className="one">
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="photoes/three.jpg" />
         <Card.Body>
         <Card.Title>Hands on progects</Card.Title>

          </Card.Body>
         </Card>
      </Col>

      <Col className="two">
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="photoes/nine.jpg" />
         <Card.Body>
         <Card.Title>Team work Implimentation</Card.Title>
          </Card.Body>
        </Card>
      </Col>

      <Col className="three">
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="photoes/nineteen.jpg" />
         <Card.Body>
         <Card.Title>Node.js Implimentation</Card.Title>
          </Card.Body>
         </Card>
      </Col>
    </Row>

    <Row>
       <Col className="one">
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="photoes/sixteen.jpg" />
         <Card.Body>
         <Card.Title>Woldwide recognized Certifications</Card.Title>
          </Card.Body>
         </Card>
      </Col>

      <Col className="two">
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="photoes/two.jpg" />
         <Card.Body>
         <Card.Title>Database Orienations</Card.Title>  
          </Card.Body>
        </Card>
      </Col>

      <Col className="three">
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="photoes/tweleve.jpg" />
         <Card.Body>
         <Card.Title>Learning Javascript Skills</Card.Title>
          </Card.Body>
         </Card>
      </Col>
    </Row>

    <div className="seconddiv">
       <p>Copyright © 2023 Heil college. All rights reserved.
         Privacy Policy | Terms of Use | Accessibility</p>
    </div>
  </div>
  );
}

export default MainPage;