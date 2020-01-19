import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'

const feedItem = {
  id: 1,
  date: '03 NOV',
  description: 'Pag*Mecanicatonimek',
  value: 214.50,
  operation: 'credit'
}

class AccountFeed extends Component {
  parseItem (item) {
    return (
      <Row key={Math.random()}>
        <Col xs={3}> {item.date} </Col>
        <Col xs={7}> {item.description} </Col>
        <Col xs={2}> {item.value} </Col>
      </Row>
    )
  }

  render() {
    const items = []
    for (var i = 0; i < 50; i++) {
      items.push(this.parseItem(feedItem))
    }
    return (
        <Container id="feed-container" className={ this.props.filterOn ? 'filter-on' : 'filter-off' }>
          {items}
        </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sample: state.sample
  }
}

export default connect(mapStateToProps)(AccountFeed)
