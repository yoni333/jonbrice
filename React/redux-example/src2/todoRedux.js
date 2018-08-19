import React, { Component } from 'react';
import { connect } from 'react-redux'
 import store from './store'
import {getList} from './actions'

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


@connect((store)=>{
    return{
        list:store.list
    }
})

class TodoRedux extends Component {

  
  
    render() {
        console.log(store);
        this.props.dispatch(getList())
        return (

            <ul>
                {listItems(this.props.list)}
            </ul>

        )
    }

}

export default TodoRedux