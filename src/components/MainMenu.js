import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

class MainMenu extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="mr-auto">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/" className="nav-link"> Home </Link>
          <Link to="/second" className="nav-link"> Extratos </Link>
          <Link to="/main" className="nav-link"> Mock </Link>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MainMenu
