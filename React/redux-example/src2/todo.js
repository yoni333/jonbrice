import React, { Component } from 'react';
import './App.css';

const listItem = (item,index) => {
    console.log(item)
    return <li key={index}>{item}</li>
}
const listItems = (items) => {

    return (
        <React.Fragment>
            {items.map((item,index) => listItem(item,index))}
        </React.Fragment>
    )
}
class Todo extends Component {

    state = { list: ['buy milk', 'buy shirt'] }
    render() {

        return (

            <ul>
                {listItems(this.state.list)}
            </ul>

        )
    }

}

export default Todo