import React, { useState, Component } from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Link } from 'react-router-dom'
import Router from './Router'
import { connect } from 'react-redux'

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  )
}

class App extends Component {
  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Welcome To React-Bootstrap</h1>
          <h4>  { this.props.sample.message } </h4>
          <ExampleToast className="toast">
            We now have Toasts
            <span role="img" aria-label="tada">
              🎉
            </span>
          </ExampleToast>
          <BrowserRouter>
            <Router />
            <Link to="/"> Routing Component 0 </Link>
            <Link to="/second"> Routing Component 2 </Link>
          </BrowserRouter>
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

export default connect(mapStateToProps)(App)
