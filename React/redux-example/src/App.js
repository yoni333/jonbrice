import React, { Component } from 'react';

import './App.css';

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
      </div>

    );
  }
}

export default App;
