import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'
import Api from '../Api'
import config from '../config'
import { connect } from 'react-redux'
import TransactionForm from './TransactionForm'

class HackModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      transactionModel: {
        date: undefined,
        description: undefined,
        value: undefined,
        type: undefined
      }
    }
  }

  // grab form inputs to compose a model
  handleUpdate (model) {
    let updtModel = {
      ...this.state.transactionModel
    }
    updtModel[model.id] = model.value
    this.setState({ transactionModel: updtModel })
  }

  // mocking persistence to backend
  persistTransactions (trans) {
    return new Promise((resolve, reject) => {
      Api('/save').post(trans).then(persistedTransaction => {
        this.props.dispatch({
          type: 'ADD_TRANSACTIONS',
          transaction: persistedTransaction
        })
        resolve()
      }).catch(err => reject(err))
    })
  }

  generateRandomTransaction(amount) {
    const randTransactions = []
    for (let i = 0; i < amount; i++) {
      const r = {
        id: Math.floor(Math.random() * config.transactionOperations.length),
        date: new Date().setDate(
          new Date().getDate() - Math.floor(Math.random() * config.daysFromAccountStart)),
        value: parseFloat(Math.random() * 100).toFixed(2)
      }

      randTransactions.push({
        ...config.transactionOperations[r.id],
        ...r,
        id: config.transactionOperations.length
      })
    }
    return randTransactions
  }

  // button actions
  fillWithRandomModel () {
    const randomTransaction = this.generateRandomTransaction(1)
    this.setState({ transactionModel: randomTransaction[0] })
  }

  populate () {
    this.setState({ loading: true })
    const randomTransactions = this.generateRandomTransaction(config.populateAmount)
    this.persistTransactions(randomTransactions).then(() => {
      this.setState({ loading: false })
    })
  }

  saveModel = () => {
    this.setState({ loading: true })
    this.persistTransactions(this.state.transactionModel).then(() => {
      this.setState({ loading: false, transactionModel: {} })
      this.props.displayChange()
    })
  }

  render () {
    const loadIcon = <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>

    const spinner = this.state.loading
      ? (<> { loadIcon }{ loadIcon }{ loadIcon } </>)
      : undefined

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
              <Button size="sm" variant="outline-secondary" disabled={this.state.loading}
                onClick={() => this.populate()}>
                popular
              </Button>
              <Button size="sm" variant="outline-secondary" disabled={this.state.loading}
                onClick={() => this.fillWithRandomModel()}>
                preencher aleatoriamente
              </Button>
              <Button size="sm" variant="primary" disabled={this.state.loading}
                onClick={!this.state.loading ? this.saveModel : null}>
                { spinner || ' Salvar' }
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
    transactions: state.transactions
  }
}

export default connect(mapStateToProps)(HackModal)
