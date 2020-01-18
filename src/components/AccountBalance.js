import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'


class AccountBalance extends Component {
  render() {
    return (
        <Container id="balance-container">
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

export default connect(mapStateToProps)(AccountBalance)
