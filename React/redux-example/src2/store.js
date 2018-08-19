import { createStore } from "redux"


let state={
    list: ['buy milk', 'buy shirt']
 }

 const reducer = function( state=state, action){

        if (action.type==="get"){
            console.log(state)
            return state
          //  return state+action.payload
        }
        if (action.type==="add"){
            return state+1
          //  return state+action.payload
        }
    
        if (action.type==="delete"){
            return state-1
        }
    
        if (action.type==="E"){
            throw new Error('oops!!')
        }
    
        return state
    }

   

    const store = createStore(reducer,state);
 export default store;