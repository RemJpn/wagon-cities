import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class City extends Component {
  handleClick = () => {
    console.log('clicked');
    this.props.selectCity(this.props.city);
  }


  render() {
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

import { selectCity } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
