const intialState = {
    balls: 50
};

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