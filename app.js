const redux = require('redux');
const createStore = redux.createStore;

const beginingState = {
    number: 0,
};
//reducer is a pure function that takes the current state and an action, and returns the next state
const reducer = (state = beginingState, action) => {
    //Actions are payloads of information that send data from your application to your store. 
    if(action.type === 'INCREMENT'){
        const nextState = Object.assign({}, state);
        nextState.number = state.number + 1;
        return nextState;
    }
    if(action.type === 'DECREMENT'){
        const nextState = Object.assign({}, state);
        nextState.number = state.number - 1;
        return nextState;
    }
    if(action.type === "ADD"){
        const nextState = Object.assign({}, state);
        nextState.number = state.number + action.num;
        return nextState
    }
    if(action.type === 'RESET'){
        const nextState = Object.assign({}, state);
        nextState.number = state.number - state.number;
        return nextState;
    }
    
}


//A store holds the whole state tree of your application. It's just an object with a few methods on it.
const store = createStore(reducer);

//subscriptions are called after the root reducer has returned the new state, so you may dispatch in the subscription listeners

store.subscribe(() => {
    console.log('Subscription: ', store.getState());
});


// dispatch triggers a state change.
store.dispatch({ type: "INCREMENT"});
store.dispatch({ type: "INCREMENT"});
store.dispatch({ type: "INCREMENT"});
store.dispatch({ type: "DECREMENT"});
store.dispatch({ type: "DECREMENT"});
store.dispatch({ type: "RESET"});
store.dispatch({ type: "ADD", num: 5});

