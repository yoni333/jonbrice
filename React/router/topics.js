import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
      { match.params.name !== undefined ? <h3>i am paran 'name': match.params.name </h3>:null}
    </div>
  )
  
  const Topics = ( obj ) => { 
      console.log(obj);
      const  match = obj.match
      return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={match.url +'/components'}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state/yoni`}>
           two params in the url
          </Link>
        </li>
      </ul>
  
      <Route exact  path={`${match.path}/:topicId`} component={Topic}/>
      <Route path={`${match.path}/:topicId/:name`} component={Topic}/>
      <Route exact path={match.path} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
    </div>
  )
}

export default Topics