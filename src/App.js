import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter } from "react-router-dom";
import Router from './components/router'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Router></Router>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
