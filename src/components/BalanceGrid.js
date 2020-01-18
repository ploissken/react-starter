import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux'


class ThirdComponent extends Component {
  render() {
    return (
      <Container>
        <Row>
          le terceiro
        </Row>
        <Row>
          soy yo
        </Row>
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

export default connect(mapStateToProps)(ThirdComponent)
