import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

class MainMenu extends Component {
  render() {
    return (
      <Navbar className="ml-auto" style={{ "backgroundColor": "#ddd" }}>
        <Navbar.Brand className="mr-auto" >ReactStarter</Navbar.Brand>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/second" className="nav-link"> Second Component </Link>
        <Link to="/main" className="nav-link"> Component Third </Link>
      </Navbar>
    )
  }
}

export default MainMenu
