import { createStore } from 'redux'

const initState = {
    items: [],
    hasErrored: false,
    isLoading: false
};

const reducer = (state = initState, action) => {
    console.log('state', state);
    console.log('action type', action.type);
    console.log('action payload', action.payload);

    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            console.log('ITEMS_HAS_ERRORED')
            return { ...state, hasErrored: action.payload }

        case 'ITEMS_IS_LOADING':
            console.log('ITEMS_HAS_ERRORED')
            return { ...state, isLoading: action.payload }

        case 'ITEMS_IS_LOADING':
            console.log('ITEMS_FETCH_DATA_SUCCESS')
            return { ...state, items: action.payload }


        default:
            return {...state}
    }
}


const store = createStore(reducer, initState)

store.subscribe(() => {
    console.log("store change", store.getState());

})

export { store }


