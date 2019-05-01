import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Countries from './components/countries';
import Visits from './components/visits';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Route path="/" exact component={Countries} />
          <Route path="/visits/" component={Visits} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
