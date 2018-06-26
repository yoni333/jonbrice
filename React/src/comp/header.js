import React from 'react';
//export default - if we want take of curly brackets when we import
export default class Header extends React.Component {
   
    render(){
    console.log(this.props);
    return  ( <h2>Header {this.props.title}</h2> )


    }


}

 