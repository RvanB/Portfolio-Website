import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar className="topbar" bg="light" variant="light" expand="md" sticky="top">
          <Container>
            <Navbar.Brand href="/">Raiden van Bronkhorst</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/code">Code</Link>
                <Link className="nav-link" to="/notcode">Not code</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col md="auto">
              <div className="margin-info">
                <Image className="portrait" src="/img/raiden.jpg" width="150ch" />
                <ul className="socials">
                  <li><i className="fa-solid fa-envelope"></i> <a href="mailto:rvanbronkhorst@gmail.com">Email</a></li>
                  <li><i className="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/rvanbronkhorst">LinkedIn</a></li>
                  <li><i className="fa-brands fa-github"></i> <a href="https://github.com/RvanB">GitHub</a></li>
                </ul>
              </div>
            </Col>
            <Col md={true}>
              <Outlet />

              <footer>
                <p>© 2022 Raiden van Bronkhorst</p>
              </footer>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
