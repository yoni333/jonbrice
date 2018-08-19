import React, { Component } from 'react';
import Todo from './todo'
import './App.css';
import TodoRedux from './todoRedux';

class App extends Component {
  render() {
    return (
   
      <div className="App">
        <h1>REDUX</h1>
        <div> לרידקס יש שלושה רכיבים - </div>
        <div>store , actions , reducers</div>
        <ul>
          <li>action - מכיל את שם הפעולה שאנחנו רוצים לבצע מתוך מאגר הפעולות שהגדרנו בחנות</li>
          <li>reducer - למעשה זאת הפונקציה שהפעולה מפעילה</li> 
          <li>store - המקום שבו נפגשים הפעולות והפונקציות שמשוייכות אליהם</li>
          
        </ul>
        <hr/>
        <h3>with no redux</h3>
        <Todo/>
        <hr/>
        <h3>with  redux</h3>
        <ul>
          <li>we need to install react-redux 'npm i react-redux --save'</li>
          <li>we will need t import Provider and connect fron this package</li>
          <li>we also need to config webpack to handle decorator 'npm run eject'</li> 
          <li>search for babel-loader in webpack.config.dev && webpack.config.prod and add it ' plugins: ['transform-decorators-legacy'],'</li>
        </ul>
        <TodoRedux/>
      </div>
  
    

    );
  }
}

export default App;
