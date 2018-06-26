import React from 'react';
import UserTypes from './userTypes';

export default class FormArea extends React.Component{
    constructor(){
        super();
        this.state={ types:''}
    }
    changeTypes(types){
        this.setState({types:types});
    }

    handleTypes(e){
        this.changeTypes(e.target.value)

    }
    render(){

        return (
            <div>
                <hr/>
                {this.props.title}
                <UserTypes/>
                <input onChange={this.handleTypes.bind(this)}/>
                <div> FormArea class: {this.state.types}</div>
               
            </div>
        );

    }




}