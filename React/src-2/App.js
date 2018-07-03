import React, { Component } from 'react';

import Events from './call-to-events/events';
import Board from './chess-state/board.js';
import Board2 from './chess-state-props/board.js';
import WelcomeContainer from './props/welcome-container'
import Library from './props/books';
import LibraryDelete from './props/books-delete-bind';
class App extends Component {
  render() {
    return (
      <div>
        <LibraryDelete/>
       <Library/>
       <WelcomeContainer/>
        <Board2/>
        <Board/>
        <Events/>
      </div>
    );
  }
}

export default App;
