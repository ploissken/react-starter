import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import MainGrid from './MainGrid'

class App extends Component {
  render() {
    return (
      <MainGrid />
    )
  }
}

const mapStateToProps = (state) => {
  console.log('hi, my name is state', state)
  return {
    sample: state.sample
  }
}

export default connect(mapStateToProps)(App)
