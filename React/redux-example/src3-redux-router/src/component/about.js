import {Link} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';


 class About extends React.Component {
 render () {
     console.log(this.props.message);
     
   return (
     <div className="App">
       <h1>About Page</h1>
       <h2>{this.props.message}</h2>
       <Link to='/'>
        <button>Go Home</button>
       </Link>
     </div>
   )
 }
}

export default connect(state => state)(About);