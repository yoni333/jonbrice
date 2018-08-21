import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './component/about';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={App}/>
   <Route path='/about' component={About}/>
   </Switch>
   </BrowserRouter>
 )
}