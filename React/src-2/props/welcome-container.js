import React, { Component } from 'react';

import {Welcome , WlcomeCls , WelcomeElm , WelcomeElm2} from './welcome'
class WelcomeContainer extends Component {
  render() {
    return (
      <div>
        <Welcome name="ravTech , from function"/>
        <Welcome name="again ravTech , from function"/>
        <WlcomeCls name=" ravTech"/>
        <WlcomeCls name=" again ravTech"/>
        {WelcomeElm}
        {WelcomeElm2}
       
      </div>
    );
  }
}

export default WelcomeContainer;
