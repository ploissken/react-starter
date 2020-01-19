import React, { Component } from 'react'
import { connect } from 'react-redux'
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
  render () {
    const transactionDropdown = (
      <DropdownButton as={Col} size="sm" xs="6" lg="3"
        title="tipo de transação"
        className="form-dropdown"
        variant="outline-secondary"
        id="ddown"
        key="ddown"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      </DropdownButton>
    )

    const dateInput = (
      <Form.Group as={Col} xs="6" lg="3">
        <DatePicker
          className="form-control form-control-sm"
          isClearable
          placeholderText="data"
          selected={null}
          onChange={newDate => console.log('olar')}/>
      </Form.Group>
    )

    const textInput = title => {
      return (
        <Form.Group as={Col} xs="6" lg="3">
          <InputGroup size="sm">
            <FormControl
              placeholder={`${title}`}
              aria-label={`${title}`}
              aria-describedby="basic-addon2"
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
          { textInput('descrição') }
          { textInput('valor') }
        </Form.Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('hi, my name is state', state)
  return {
    sample: state.sample
  }
}

export default connect(mapStateToProps)(TreansactionForm)
