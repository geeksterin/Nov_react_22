const intialState = {
    balls:50,

};
// Reducers are pure functions that take the current state of an application, perform an action, and return a new state. The reducer handles how the state (application data) will change in response to an action.
const BallReducer = (state = intialState, action) => {
    switch (action.type) {
        case "SELL_BALL":
            return {
                ...state,
                balls: state.balls - action.payload 
            };
        default:
        return state;
    }
}

export default BallReducer;