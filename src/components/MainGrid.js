import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from '../Router'
import MainMenu from './MainMenu'


class MainGrid extends Component {
  // https://react-bootstrap.github.io/layout/grid/
  render() {
    return (
      <BrowserRouter id="main-grid">
          <MainMenu />
          <Router />
      </BrowserRouter>
    )
  }
}


export default MainGrid
