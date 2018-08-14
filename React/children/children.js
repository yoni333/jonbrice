import React, { Component ,Children } from 'react';

function SimpleChild(name){
    return <h4> i was passed as child {name}</h4>
}
class SingleChild extends Component {
  
        render(){
            return(
            <React.Fragment>
              <h4>  count children with React.Children.count() --> {React.Children.count(this.props.children)} </h4>
                {this.props.children}
               <h4>we can force single child patten by using Children.only</h4> 
                { Children.only(this.props.children)}
                <h3>important - React.Children is MAP so we can use it like array!</h3>
                {Children.map(this.props.children,child=>
                             <button className="btn">{child}</button>)
                             }
            </React.Fragment>
            )
        }
}

class ChildrenMain extends Component {

   
    name="from ChildrenMain"
    render(){

        return(
            <div className="container">
            <h1>Passing Children In React</h1>
                <div className="">
                    {this.props.children}
                </div>
                <hr/>
                <SingleChild> 
                   {/* <div>hy</div> */}
                   <SimpleChild name={this.name}/>
                 </SingleChild>
            
            </div>
        )
    }
}

export default ChildrenMain ;
