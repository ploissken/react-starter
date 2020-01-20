import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import AccountFilter from './AccountFilter'
import { connect } from 'react-redux'

class AccountMenu extends Component {
  filteredBalance () {
    const fullList = this.props.transactions.fullList
    const endDate = this.props.transactions.filterDate.end
    const filteredList = endDate
      ? fullList.filter(t =>
        t => new Date(t.date).getTime() <= new Date(endDate).getTime())
      : fullList

    const total = filteredList.map(t => {
      return t.type === 'debit'
        ? -1 * parseFloat(t.value)
        : parseFloat(t.value)
    }).reduce((acc, cur) => acc + cur, 0)

    return parseFloat(total).toFixed(2).replace('.', ',')
  }

  render() {
    const balanceLabel = this.props.transactions.filterDate.end
      ? `Saldo em ${new Date(this.props.transactions.filterDate.end).toDateString().substr(4, 6)}`
      : 'Saldo atual'

    const filter = this.props.filterOn
      ? <AccountFilter />
      : undefined
    return (
        <Container id="balance-container">
          { filter }
          <h3> R$ {this.props.transactions.currentBalance} </h3>
          <p>
            { balanceLabel }
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
