import React, { Component } from 'react'
import './style/App.css'
import { connect } from 'react-redux'
import MainGrid from './components/MainGrid'

class App extends Component {
  render() {
    return (
      <MainGrid />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sample: state.sample
  }
}

export default connect(mapStateToProps)(App)
