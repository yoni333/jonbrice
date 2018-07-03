import React, { Component } from 'react';
import BlackRow from './blackRow';
import WhiteRow from './whiteRow';

import './board1.css';

class Board extends Component {
   
   maxRows;
    constructor() {
        super();
        this.state = {rows:this.createRows()};
        this.maxRows=0;

       //this.state={maxRows:0}
        this.setRowsNumber = this.setRowsNumber.bind(this);
        
      
    }
    createRows() {

       let  rows =[];
        for (let i = 0; i < this.maxRows; i++) {

            if (i % 2 === 0) {
               rows.push(<BlackRow key={i} />);
            } else {
               rows.push(<WhiteRow key={i} />);
            }
        }

        return rows;
        
    }
    setRowsNumber(e) {

        console.log(e.target.value);
        this.maxRows = e.target.value;
        this.setState({rows: this.createRows() }) ;

    }
    render() {

        return (
            <div>
                <input type="number" onChange={this.setRowsNumber} />

                {this.state.rows}


            </div>
        );
    }
}

export default Board;
