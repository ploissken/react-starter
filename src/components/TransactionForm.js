import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

class TreansactionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      localDate: new Date(),
      opType: undefined
    }
  }
  handleChanged(newValue) {
    this.props.updateModel(newValue)
  }
  render () {
    const dropdownTitle = this.props.model.type
      ? this.props.model.type === 'debit' ? 'débito' : 'crédito'
      : 'tipo de transação'
    const transactionDropdown = (
      <DropdownButton as={Col} size="sm" xs="6" lg="3"
        onSelect={opId => this.handleChanged({id: 'type', value: opId})}
        selected={this.props.model.type}
        title={ dropdownTitle }
        variant="outline-secondary">
        <Dropdown.Item eventKey="credit">crédito</Dropdown.Item>
        <Dropdown.Item eventKey="debit">débito</Dropdown.Item>
      </DropdownButton>
    )

    const dateInput = (
      <Form.Group as={Col} xs="6" lg="3">
        <DatePicker
          id="date"
          className="form-control form-control-sm"
          isClearable
          placeholderText="data"
          selected={this.props.model.date}
          onChange={newDate => this.handleChanged({id: 'date', value: newDate})}/>
      </Form.Group>
    )

    const textInput = title => {
      return (
        <Form.Group as={Col} xs="6" lg="3">
          <InputGroup size="sm">
            <FormControl
              id={`${title.id}`}
              placeholder={`${title.label}`}
              value={`${this.props.model[title.id] || ''}`}
              aria-label={`${title.label}`}
              aria-describedby="basic-addon2"
              onChange={e => this.handleChanged({ id: e.target.id, value: e.target.value })}
            />
          </InputGroup>
        </Form.Group>
      )
    }

    return (
      <Container>
        <Form.Row>
          { transactionDropdown }
          { dateInput }
          { textInput({ label: 'descrição', id: 'description' })}
          { textInput({ label: 'valor', id: 'value' }) }
        </Form.Row>
      </Container>
    )
  }
}

export default TreansactionForm
