import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Topics from  './topics'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

const Home = () => (
    <div>
        <h2>Home Page</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About Page</h2>
        <h4>react-router-dom is an external package on top of react</h4>
    </div>
)


class RouterApp extends Component {
    render() {
        const nav ={
            marginLeft:"10px",
            fontSize:"25px"

        }
        return (

            <div className="container">

                <h1>React Router</h1>
                <h2>1) install the package with npm - "npm install react-router-dom"</h2>
                <h2>2) import {'{  BrowserRouter ,  Route , Link }'} from 'react-router-dom' </h2>
                <h2>3) add BrowserRouter to you app  </h2>
                <h2>4) inside BrowserRouter add Route and Link ( as children)  </h2>
                <h2>5) in Route you can use - render to call function , or - component for class  </h2>
                <h2>6) the data of the router is in the object 'match'  </h2>
                <h2>7) you can pass params in the url with ':' like /:userID ' it go to 'match.params'  </h2>
                <hr />
                <BrowserRouter >
                    <div className="row">

                       <div className="col-12">
                           <Link to="/" style={nav}>Home</Link>
                           <Link to="/about" style={nav}>About</Link>
                           <Link to="/topics" style={nav}>Topics</Link>
                       </div>
                       <div>

                        <Route exact path="/" component={Home}/>
                        
                        <Route path="/about" component={About}/>

                        <Route path="/topics" component={Topics}/>

                       </div>
                     
                    </div>
                </BrowserRouter>

            </div>


        )
    }
}

export default RouterApp;
