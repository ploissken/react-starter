
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import BalanceGrid from './components/BalanceGrid'
import Container from 'react-bootstrap/Container'

class Router extends Component {
  render() {
    return (
      <Container as="section" id="router-container">
        <Row id="router-content">
          <Route path="/" component={null} />
          <Route path="/account/home" component={BalanceGrid} />
          <Route path="/account/balance" component={BalanceGrid} />
          <Route path="/account/hack" component={BalanceGrid} />
        </Row>
      </Container>
    )
  }
}

export default Router
