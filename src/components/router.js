import React, {Component} from 'react';
import { Route } from "react-router-dom";
import Countries from './countries';
import Visits from './visits';

class Router extends Component{
  render(){
    return (
      <div>
        <Route path="/" exact component={Countries} />
        <Route path="/visits/" component={Visits} />
      </div>
    )
  }
}

export default Router;
