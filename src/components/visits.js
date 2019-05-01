import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteVisit} from '../store/visits/actions';

class Home extends Component{
  handledClick = (id) => {
    this.props.deleteVisit(id);
  }
  render(){
    const { visits } = this.props;
    const visitsList = visits.length ? (
      visits.map((item, index) => {
        return (
          <div className="Visit card" key={index}>
            <div className="card-content">
              <span className="card-title">{item.countryName}</span>
            </div>
            <div className="card-action">
              <button onClick={()=>this.handledClick(item.id)}>Delete visit</button>
            </div>
          </div>
        )
      })) : (
      <div className="center">No country visited</div>
      );
    return (
      <div>
        <div className="container home">
          <h4 className="center">Visits</h4>
          {visitsList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visits: state.visits
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteVisit: (id) => deleteVisit(dispatch, id),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
