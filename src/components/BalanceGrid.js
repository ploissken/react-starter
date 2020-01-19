import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccountMenu from './AccountMenu'
// import AccountFilter from './AccountFilter'
import AccountFeed from './AccountFeed'
import { connect } from 'react-redux'


class BalanceGrid extends Component {
  render() {
    const displayFilter = this.props.location.pathname.includes('/balance')
    return (
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <AccountMenu filterOn={displayFilter} />
          </Col>
          <Col sm={12} md={8}>
            <AccountFeed filterOn={displayFilter} />
          </Col>
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

export default connect(mapStateToProps)(BalanceGrid)
