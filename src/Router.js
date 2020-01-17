import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'

class Router extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={null} />
        <Route path="/second" component={SecondComponent} />
        <Route path="/main" component={ThirdComponent} />
      </div>
    )
  }
}

export default Router
