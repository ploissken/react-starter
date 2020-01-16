import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import MainMenu from './MainMenu'


class MainGrid extends Component {
  // https://react-bootstrap.github.io/layout/grid/
  render() {
    return (
      <BrowserRouter>
        <div id="main-grid" style={{ "width": "100vw", "height": "100vh", "border": "2px dashed yellow" }}>
          <MainMenu />
            <Container xl={true} style={{ "border": "2px dashed yellow" }}>
              <Row style={{ "border": "1px solid #0F0" }}>
                <Router />
              </Row>
            </Container>
        </div>
      </BrowserRouter>
    )
  }
}


export default MainGrid
