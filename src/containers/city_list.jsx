import React, { Component } from 'react';

import City from './city';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }


  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => {
          return (
            <City city={city} />
          );
        })}
      </div>
    );
  }
}


import { setCities } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
