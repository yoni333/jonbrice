import React from 'react';
import {connect} from 'react-redux';

 class InputPreview extends React.Component {
  
typing = (e)=>{
    console.log(e.target.value);
    console.log(this);
    this.props.dispatch({type:'SET_MESSAGE',payload:e.target.value})
}
 render () {
    console.log(this);
   return (
     <div>
       <input
        type="text"
        value={this.props.value}
        onChange={(e)=>this.typing(e)}
        />
     </div>
   )
 }
}

export default  connect(state => state)(InputPreview); 