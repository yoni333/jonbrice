// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


// //step 1
// import {createStore} from 'redux'

// const reducer = function( state, action){

//     if (action.type==="add"){
//         return state+1
//       //  return state+action.payload
//     }

//     if (action.type==="dec"){
//         return state-1
//     }

//     return state
// }

// const store = createStore( reducer ,0)

// store.subscribe( ()=>{
//     console.log("store change" , store.getState() );

// })

// //type is reserved word. payload can be change to other words like 'value'
// //payload can get object as value
// store.dispatch({type:"add" , payload:1})
// store.dispatch({type:"add" , payload:1})
// store.dispatch({type:"add" , payload:2})
// store.dispatch({type:"add" , payload:2})
// store.dispatch({type:"dec" , payload:3})

// // step 2  multy reducer

// import {combineReducers, createStore} from 'redux'

// const userReducer = function( state={}, action){

//     //immunate first approch

//     // second approch state ={...state,name}
//     const newState = {...state}
//     switch (action.type) {
//         case 'CHANGE_NAME':
//           //      state.name="avi"
//                 newState.name=action.payload
//             break;

//             case 'CHANGE_AGE':
//           //  state.age="30"
//             newState.age="30"

//             break;

//         default:
//             break;
//     }
//     return newState
//    // return state
// }


// const tweetReducer = function( state=[], action){

//     return state
// }

// const reducers = combineReducers({
//     user:userReducer,
//     tweets:tweetReducer
// })

// const store = createStore( reducers ,{

//         //this is the data structere but we dont write the default in the store!
//         // user:{
//         //     name:'ranni',
//         //     age:35
//         // },
//         // tweets:[]

// })

// store.subscribe( ()=>{
//     console.log("store change" , store.getState() );

// })

// //type is reserved word. payload can be change to other words like 'value'
// //payload can get object as value
// store.dispatch({type:"CHANGE_NAME" , payload:"avi"})
// store.dispatch({type:"CHANGE_AGE" , payload:1})
// store.dispatch({type:"CHANGE_NAME" , payload:"avishay"})


// //step 3 middleware

// import {createStore ,applyMiddleware} from 'redux'

// const reducer = function( state, action){

//     if (action.type==="add"){
//         return state+1
//       //  return state+action.payload
//     }

//     if (action.type==="dec"){
//         return state-1
//     }

//     if (action.type==="E"){
//         throw new Error('oops!!')
//     }

//     return state
// }
// //this is my middleware
// const logger= (store)=>(next)=>(action=>{
//     console.log('action fired and ' , action)
//     next(action)
// })

// const error= (store)=>(next)=>(action=>{
//     console.log('error middleware here ')
//     try{
//         next(action)
//     }   catch(e){

//         console.log('error ' ,e)
//     }

// })

// const middleware =applyMiddleware(logger,error)

// const store = createStore( reducer ,0 , middleware)

// store.subscribe( ()=>{
//     console.log("store change" , store.getState() );

// })

// //type is reserved word. payload can be change to other words like 'value'
// //payload can get object as value
// store.dispatch({type:"add" , payload:1})
// store.dispatch({type:"add" , payload:2})
// store.dispatch({type:"dec" , payload:3})
// store.dispatch({type:"E" , payload:3})






//step 4 async actions

//first install redux logger

// import {createStore ,applyMiddleware } from 'redux'
// import {createLogger} from 'redux-logger'
// import thunk from 'redux-thunk'
// import axios from 'axios'

// const reducer = function( state, action){

//     if (action.type==="add"){
//         return state+1
//       //  return state+action.payload
//     }

//     if (action.type==="dec"){
//         return state-1
//     }

//     if (action.type==="FETCH_DOGS_START"){
//         console.log('FETCH_DOGS_START')
//         return state
//     }
//     if (action.type==="FETCH_DOGS_RESPONSE"){
//         console.log('FETCH_DOGS_START')
//         console.log(action.payload)
//         return state
//     }

//     return state
// }
// //this is my middleware


// const middleware =applyMiddleware(thunk,createLogger())

// const store = createStore( reducer ,0 , middleware)

// store.subscribe( ()=>{
//     console.log("store change" , store.getState() );

// })



// //type is reserved word. payload can be change to other words like 'value'
// //payload can get object as value
// store.dispatch({type:"add" , payload:1})
// store.dispatch({type:"add" , payload:2})
// store.dispatch({type:"dec" , payload:3})

// store.dispatch((dispatch)=>{

//     dispatch({type:"FETCH_DOGS_START" })
//     axios.get("https://dog.ceo/api/breeds/list/all").then((response)=>{
//         dispatch({type:"FETCH_DOGS_RESPONSE",payload:response.data })
//     })

// })


//step 6 coonect to react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

    
//ReactDOM.render(<App />   , document.getElementById('root'));
registerServiceWorker();
