import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { connect } from 'react-redux'

import TransactionForm from './TransactionForm'
class HackModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactionModel: {
        date: undefined,
        description: undefined,
        value: undefined,
        type: undefined
      }
    }
  }
  handleUpdate (model) {
    let updtModel = {
      ...this.state.transactionModel
    }
    updtModel[model.id] = model.value
    this.setState({ transactionModel: updtModel })
  }
  generateRandom() {
    const transactions = [
      { type: 'debit', description: 'Padaria Delícias' },
      { type: 'debit', description: 'Supermercado da Esquina' },
      { type: 'debit', description: 'Confraria da Arte' },
      { type: 'debit', description: 'Restaurante Marromenos' },
      { type: 'debit', description: 'Uber "do Brasil"' },
      { type: 'debit', description: 'Bar BarIdade' },
      { type: 'debit', description: 'Café Zen' },
      { type: 'credit', description: 'Depósito Eletrônico' }
    ]

    const r = {
      id: Math.floor(Math.random() * transactions.length),
      date: new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 90)),
      value: parseFloat(Math.random() * 100).toFixed(2)
    }

    const randomTransaction = {
      ...transactions[r.id],
      ...r,
      id: transactions.length
    }

    this.setState({ transactionModel: randomTransaction })


  }
  saveModel () {
    this.props.dispatch({
      type: 'ADD_TRANSACTION',
      transaction: this.state.transactionModel
    })
  }
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
              <TransactionForm
                updateModel={updt => this.handleUpdate(updt)}
                model={this.state.transactionModel}/>
            </Modal.Body>
            <Modal.Footer>
              <Button size="sm" variant="outline-secondary"
                onClick={() => this.generateRandom(1)}>
                gerar aleatório
              </Button>
              <Button size="sm" variant="primary"
                onClick={() => this.saveModel()}>
                salvar
              </Button>
            </Modal.Footer>
          </Modal>
        </span>
      )
      : null
  }
}

const mapStateToProps = (state) => {
  return {
    sample: state.sample
  }
}

export default connect(mapStateToProps)(HackModal)
