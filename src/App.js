import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from './Components/Nav/Navbar'
import Routes from './Routes/Routes'
import './App.css';

function App() {
  return (
    <Container fluid>
      <Navbar />
      <Routes />
    </Container>
  );
}

export default App;
