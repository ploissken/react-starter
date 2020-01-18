// https://gist.github.com/stephencookdev/cc7177c8fd0663fc0050a36f0d81ef7c
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HomeGrid from './components/HomeGrid'
import Row from 'react-bootstrap/Row'
import BalanceGrid from './components/BalanceGrid'
import Container from 'react-bootstrap/Container'

class Router extends Component {
  render() {
    return (
      <Container as="section" id="router-container" xl={true}>
        <Row id="router-content">
          <Route path="/" component={null} />
          <Route path="/home" component={HomeGrid} />
          <Route path="/balance" component={BalanceGrid} />
        </Row>
      </Container>
    )
  }
}

export default Router
