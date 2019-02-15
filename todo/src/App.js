import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';



class App extends Component {
  render() {
    return (
      <div>test</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      movies: "The matrix",
      activeMovite: null,
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
