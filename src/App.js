import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Increment from './Increment';
import { CounterContext } from './context/CounterContext';
const App = () => {
  return (
    <CounterContext>
      <Container>
        <Increment />
      </Container>
    </CounterContext>
  )
}

export default App