import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import AccountFilter from './AccountFilter'

import { connect } from 'react-redux'


class AccountMenu extends Component {
  render() {
    const total = parseFloat(
      this.props.transactions.fullList.map(t => {
        return t.type === 'debit'
          ? -1 * parseFloat(t.value)
          : parseFloat(t.value)
      }).reduce((acc, cur) => acc + cur)).toFixed(2)

    const filter = this.props.filterOn
      ? <AccountFilter />
      : undefined


    return (
        <Container id="balance-container">
          { filter }
          <h3> R$ {total} </h3>
          <p>
            Saldo atual
          </p>
        </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  }
}

export default connect(mapStateToProps)(AccountMenu)
