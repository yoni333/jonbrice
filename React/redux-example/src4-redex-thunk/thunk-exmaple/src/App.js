import React, { Component } from 'react';
import './App.css';

import ItemList from './components/ItemList'
import ItemListRedux from './components/items-with-redux-thunk'
//taked with some changes from
//https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
//we use--> npm install axios redux react-redux redux-thunk --save
class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <ItemList/> */}
       <ItemListRedux/>
      </div>
    );
  }
}

export default App;
