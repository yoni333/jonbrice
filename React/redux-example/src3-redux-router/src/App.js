import React, { Component } from 'react';
import './App.css';
import InputPreview from './component/input'
import {connect} from 'react-redux';
import {setMessage} from './store/store'

import {Link} from 'react-router-dom';
class App extends Component {
 
  render() {
   
    return (
      <div className="App">
        <h1>Home page</h1>
        <InputPreview   />

         <Link to='/about'>
        <button>Go to About</button>
        </Link>
      </div>
    );
  }
}

export default connect(state => state)(App);
