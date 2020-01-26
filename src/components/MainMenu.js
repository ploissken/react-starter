import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import MockModal from './MockModal'

class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <>
      <Navbar id="main-menu" expand="lg" className="mr-auto" bg="dark" variant="dark">
        <Navbar.Brand className="logo" >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/account/home" className="nav-link"> Home </Link>
          <Link to="/account/balance" className="nav-link"> Extratos </Link>
          <Link to="#" className="nav-link"
            onClick={() => this.setState({ show: !this.state.show })}>
            Mock
          </Link>
          <MockModal
            show={this.state.show}
            displayChange={() => this.setState({ show: !this.state.show })}
            />
        </Navbar.Collapse>
      </Navbar>
      </>
    )
  }
}

export default MainMenu
