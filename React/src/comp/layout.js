import React from 'react';
import Header from './header'
import FormArea from './formArea'
export default class Layout extends React.Component{

    title="my first react app";
    family
    constructor(){
        super() //must call parent constructor if you use local constructor
        this.family ="yehezkel"
        this.state ={name:"dudu" ,title:"try props"};
        
    }
    render(){
        //render must return single object -but  this object can contian multiple objet
        //better to wrap it with parentheses () !!!
        let name="yoni"
        let list = [ <Header/> , <Header/> ,<Header/>  ]; 
        console.log(this ,name)
      //  setTimeout(()=>{name="ran";console.log(this ,name) }, 1000);
       // setTimeout(()=>{this.setState({name:"avi"})  }, 2000);
        //jsx can recognize his syntax even out of render()
        return  (
        <div>
             <h1>its work {name}  {this.family} !  {this.title}
              { (function(){return "!!!"})()} 
               </h1>
               <h1>{this.state.name}</h1>
               <h3>if jsx see array of components he understand that we want to print all of them</h3>
               {list}  
               and the last is not from the array
               <Header title={"hi " + name}/>
               <FormArea title={this.state.title}/>
       </div>
      
        )
    }

}