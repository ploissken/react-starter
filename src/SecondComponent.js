import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux'


class SecondComponent extends Component {
  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Sample Component for Routing</h1>
          <h4>  { this.props.sample.message2 } </h4>
        </Jumbotron>
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

export default connect(mapStateToProps)(SecondComponent)
