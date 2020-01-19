import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { connect } from 'react-redux'

import TransactionForm from './TransactionForm'
class HackModal extends Component {
  render () {
    return this.props.show
      ? (
        <span>
          <Modal show={this.props.show}
            size="lg"
            onHide={() => this.props.displayChange()}>
            <Modal.Header closeButton>
              <Modal.Title>Mockar transação</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TransactionForm />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary"
                onClick={() => this.props.displayChange()}>
                aleatório
              </Button>
              <Button variant="primary"
                onClick={() => this.props.displayChange()}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </span>
      )
      : null
  }
}

const mapStateToProps = (state) => {
  console.log('hi, my name is state', state)
  return {
    sample: state.sample
  }
}

export default connect(mapStateToProps)(HackModal)
