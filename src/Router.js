
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import AccountGrid from './components/AccountGrid'
import Container from 'react-bootstrap/Container'

class Router extends Component {
  render() {
    return (
      <Container as="section" id="router-container">
        <Row id="router-content">
          <Route path="/" component={null} />
          <Route path="/account/home" component={AccountGrid} />
          <Route path="/account/balance" component={AccountGrid} />
        </Row>
      </Container>
    )
  }
}

export default Router
