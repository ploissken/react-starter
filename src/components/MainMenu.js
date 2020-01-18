import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

class MainMenu extends Component {
  render() {
    return (
      <Navbar id="main-menu" expand="lg" className="mr-auto" bg="dark" variant="dark">
        <Navbar.Brand className="logo" >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/home" className="nav-link"> Home </Link>
          <Link to="/balance" className="nav-link"> Extratos </Link>
          <Link to="/mock" className="nav-link"> Mock </Link>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MainMenu
