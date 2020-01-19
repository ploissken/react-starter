import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import AccountFilter from './AccountFilter'

import { connect } from 'react-redux'


class AccountMenu extends Component {
  render() {
    const filter = this.props.filterOn
      ? <AccountFilter />
      : undefined


    return (
        <Container id="balance-container">
          { filter }
          <h3> R$ 500,00</h3>
          <p>
            Saldo atual
          </p>
        </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sample: state.sample
  }
}

export default connect(mapStateToProps)(AccountMenu)
