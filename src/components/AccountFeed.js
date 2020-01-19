import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'

class AccountFeed extends Component {
  parseItem (item) {
    const itemDate = new Date(item.date)
    const parsedDate = `${itemDate.getDate()} ${itemDate.toDateString().substr(4, 3).toUpperCase()}`
    return (
      <Row key={item.id}
        className={item.operation === 'credit' ? 'credit' : 'debit'}>
        <Col xs={3}> {parsedDate} </Col>
        <Col xs={7}> {item.description} </Col>
        <Col xs={2} > {item.value} </Col>
      </Row>
    )
  }

  render() {
    const items = []
    this.props.transactions.list.forEach(transaction => {
      items.push(this.parseItem(transaction))
    })

    return (
        <Container id="feed-container" className={ this.props.filterOn ? 'filter-on' : 'filter-off' }>
          {items}
        </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sample: state.sample,
    transactions: state.transactions
  }
}

export default connect(mapStateToProps)(AccountFeed)
