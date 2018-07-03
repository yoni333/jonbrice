import React, { Component } from 'react';
import BlackSquere from './blackSqure';
import WhiteSquere from './whiteSqure';

class BlackRow extends Component {
  render() {
    return (
      <div  className="row">
        <BlackSquere/>
        <WhiteSquere/>
        <BlackSquere/>
        <WhiteSquere/>
        <BlackSquere/>
        <WhiteSquere/>
        <BlackSquere/>
        <WhiteSquere/>
      </div>
    );
  }
}

export default BlackRow;
