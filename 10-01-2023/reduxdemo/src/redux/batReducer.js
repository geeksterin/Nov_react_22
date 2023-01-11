const intialState = {
  bats: 10,
};

const BatReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SELL_BAT":
      return {
        ...state,
        bats: state.bats - action.payload,
      };
    default:
      return state;
  }
};

export default BatReducer;
