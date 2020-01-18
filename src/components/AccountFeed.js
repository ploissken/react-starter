import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'


class AccountFeed extends Component {
  render() {
    return (
        <Container id="feed-container">
          <p>
            03 NOV Pag*Mecanicatonimek 2/2	214,50
            03 NOV Leroy Merlin 3/3	287,28
            03 NOV Mercpago*Agourmet 2/2	37,05
            04 NOV Pag*Terezakatsuko	10,00
            04 NOV Cobasi Teodoro Sampaio	111,4603 NOV Pag*Mecanicatonimek 2/2	214,50
            03 NOV Leroy Merlin 3/3	287,28
            03 NOV Mercpago*Agourmet 2/2	37,05
            04 NOV Pag*Terezakatsuko	10,00
            04 NOV Cobasi Teodoro Sampaio	111,4603 NOV Pag*Mecanicatonimek 2/2	214,50
            03 NOV Leroy Merlin 3/3	287,28
            03 NOV Mercpago*Agourmet 2/2	37,05
            04 NOV Pag*Terezakatsuko	10,00
            04 NOV Cobasi Teodoro Sampaio	111,4603 NOV Pag*Mecanicatonimek 2/2	214,50
            03 NOV Leroy Merlin 3/3	287,28
            03 NOV Mercpago*Agourmet 2/2	37,05
            04 NOV Pag*Terezakatsuko	10,00
            04 NOV Cobasi Teodoro Sampaio	111,4603 NOV Pag*Mecanicatonimek 2/2	214,50
            03 NOV Leroy Merlin 3/3	287,28
            03 NOV Mercpago*Agourmet 2/2	37,05
            04 NOV Pag*Terezakatsuko	10,00
            04 NOV Cobasi Teodoro Sampaio	111,4603 NOV Pag*Mecanicatonimek 2/2	214,50
            03 NOV Leroy Merlin 3/3	287,28
            03 NOV Mercpago*Agourmet 2/2	37,05
            04 NOV Pag*Terezakatsuko	10,00
            04 NOV Cobasi Teodoro Sampaio	111,4603 NOV Pag*Mecanicatonimek 2/2	214,50
            03 NOV Leroy Merlin 3/3	287,28
            03 NOV Mercpago*Agourmet 2/2	37,05
            04 NOV Pag*Terezakatsuko	10,00
            04 NOV Cobasi Teodoro Sampaio	111,4603 NOV Pag*Mecanicatonimek 2/2	214,50
            03 NOV Leroy Merlin 3/3	287,28
            03 NOV Mercpago*Agourmet 2/2	37,05
            04 NOV Pag*Terezakatsuko	10,00
            04 NOV Cobasi Teodoro Sampaio	111,46
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

export default connect(mapStateToProps)(AccountFeed)
