import React, { Component } from 'react';
import Squere from './squere';


class Row extends Component {
  render() {
    return (
      <div  className="row">
        <Squere/>
        <Squere/>
        <Squere/>
        <Squere/>
        <Squere/>
        <Squere/>
        <Squere/>
        <Squere/>
      </div>
    );
  }
}

export default Row;
