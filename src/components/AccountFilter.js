import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

// bootstrap loading
// import Spinner from 'react-bootstrap/Spinner'
// <Spinner animation="grow"/>
// <Spinner animation="grow" size="sm"/>
// <Spinner animation="grow"/>

class AccountFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: undefined,
      endDate: undefined
    }
  }

    handleChange (date) {
      console.log(date)
    }

  render() {
    return (
      <Container id="filter-container">
        <Form.Row>
          <Form.Group
            as={Col}
            xs="5" md="12" xl="5"
            style={{ "minWidth": "110px" }}
            >
            <DatePicker
              className="form-control form-control-sm"
              isClearable
              placeholderText="de"
              tabindex={1}
              selected={this.state.startDate}
              onChange={newDate => this.setState({ startDate: newDate })}/>
          </Form.Group>

          <Form.Group
            as={Col}
            xs="5" md="12" xl="5"
            style={{ "minWidth": "110px" }}
            >
            <DatePicker
              className="form-control form-control-sm"
              isClearable
              placeholderText="até"
              tabindex={2}
              maxlength={10}
              selected={this.state.endDate}
              onChange={newDate => this.setState({ endDate: newDate })}/>
          </Form.Group>

          <Form.Group as={Col}>
            <Button size="sm" className="apply-filter-btn">
              ✓
            </Button>
          </Form.Group>
        </Form.Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sample: state.sample
  }
}

export default connect(mapStateToProps)(AccountFilter)
