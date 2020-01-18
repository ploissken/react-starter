import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccountBalance from './AccountBalance'
import AccountFeed from './AccountFeed'
import { connect } from 'react-redux'


class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={4}> <AccountBalance /> </Col>
          <Col sm={12} md={8}> <AccountFeed /> </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('hi, my name is state', state)
  return {
    sample: state.sample
  }
}

export default connect(mapStateToProps)(Home)
