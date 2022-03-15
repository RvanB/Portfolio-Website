import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar className="topbar" bg="light" variant="light" expand="sm" sticky="top">
          <Container fluid>
            <Navbar.Brand href="/">Raiden van Bronkhorst</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <br />
          <Outlet />
        </Container>
        <footer>
          <p>© 2022 Raiden van Bronkhorst</p>
        </footer>
      </div>
    );
  }
}


export default App;
