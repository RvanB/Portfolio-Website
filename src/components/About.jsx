import React from 'react';

import './About.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Row>
          <Col md={8}>
            <p>My name is Raiden van Bronkhorst, a Software Engineer in the San Francisco Bay Area. My primary interests are in the more math-heavy areas of computer science like computer graphics, computer vision, and machine learning, and I'm constantly picking up new interests. During my undergrad at Western Washington University, I worked on bioinformatics research under <a href="https://facultyweb.cs.wwu.edu/~jagodzf/">Dr. Filip Jagodzinski</a>, and computer vision research under <a href="https://facultyweb.cs.wwu.edu/~wehrwes/">Scott Wehrwein</a>. Outside of programming, I love photography, lettering, hiking, music listening, and drinking tea. On this website you'll find many of my personal projects, as well as my various interests.</p>
          </Col>
          <Col md="auto">
            <center>
            <Image src="/img/raiden.jpg" width="180ch" height="180ch" />
            </center>
          </Col>
        </Row>
        <h3>Contact</h3>

      </div>
    );
  }
}

export default About;
