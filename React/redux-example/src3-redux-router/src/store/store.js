import { createStore } from 'redux'

const initState = {
    message: 'start'
}

const reducer = (state = initState, action) => {
    console.log('state',state);
    console.log('action type',action.type);
    console.log('action payload',action.payload);
    
    switch (action.type) {
        case 'SET_MESSAGE':
        console.log('SET_MESSAGE')
            return { ...state, message: action.payload }
        default:
            return state
    }
}


const store = createStore(reducer,initState)

store.subscribe( ()=>{
        console.log("store change" , store.getState() );
        
    })

export {  store}


