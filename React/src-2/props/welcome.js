import React, { Component } from 'react';


// Always start component names with a capital letter.
// React treats components starting with lowercase letters as DOM tags. 
// For example, <div /> represents an HTML div tag, but <Welcome />
//  represents a component and requires Welcome to be in scope.

export function Welcome  (props){
    return (
        <h1> Hello , {props.name} </h1>
    )
}


export class WlcomeCls extends Component {


    render(){
        return(
        <h1> Hello from class, {this.props.name} </h1>
        )
    }
}


  export const WelcomeElm = <Welcome name="i am from VARIABLE"/>
  export const WelcomeElm2 = <Welcome name="i am from VARIABLE 2"/>