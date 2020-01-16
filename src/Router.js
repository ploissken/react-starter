import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import SecondComponent from './SecondComponent'

class Router extends Component {

  render() {
    return (
        <div>
          <Route path="/" component={null} />
          <Route path="/second" component={SecondComponent} />
        </div>
    )
  }
}


export default Router
