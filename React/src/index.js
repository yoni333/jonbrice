import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './comp/layout'
class App extends React.Component{

  
    render(){
        //render must return single object -but  this object can contian multiple objet
      
        return <Layout/>
    }

}

ReactDOM.render(<App />, document.getElementById('root'));

