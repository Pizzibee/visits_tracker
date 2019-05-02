import React from 'react';
import { connect } from 'react-redux';
import { addVisit } from '../store/visits/actions';

class Countries extends React.Component {

  handledClick = (countryName) => {
    this.props.addVisit({countryName});
  }

  render() {
    const { countries } = this.props;
    const countriesList = countries.length ? (
      countries.map((item, index) => {
        return (
          <div className="country card" key={index}>
            <div className="card-content">
              <span className="card-title">{item.name}</span>
            </div>
            <div className="card-action">
              <button className="waves-effect waves-light btn" onClick={()=>this.handledClick(item.name)}>Visited</button>
            </div>
          </div>
        )
      })) : (
      <div className="center">Countries loading..</div>
      );
    return (
      <div>
        <div className="container home">
          <h4 className="center">Countries</h4>
          {countriesList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {countries} = state;
  return {
    countries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addVisit: (visit) => addVisit(dispatch, visit),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
