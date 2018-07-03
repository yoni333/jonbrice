import React, { Component } from 'react';
import WhiteSquere from './whiteSqure';
import BlackSquere from './blackSqure';


class WhiteRow extends Component {
  render() {
    return (
      <div className="row">
          <WhiteSquere/>
          <BlackSquere/>  
          <WhiteSquere/>
          <BlackSquere/>  
          <WhiteSquere/>
          <BlackSquere/> 
      </div>
    );
  }
}

export default WhiteRow;
