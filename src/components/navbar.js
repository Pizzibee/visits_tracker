import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {fetchCountries} from '../store/countries/actions';

class Navbar extends React.Component {

  componentDidMount() {
    this.props.fetchCountries();
  }
  render() {
    return (
      <nav className="nav-wrapper blue darken-3">
        <div className="container">
          <Link className="brand-logo" to="/">Countries4You</Link>
          <ul className="right">
            <li>
              <Link to="/">Countries</Link>
            </li>
            <li>
              <Link to="/visits/">Visits</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: ()=>fetchCountries(dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Navbar);
