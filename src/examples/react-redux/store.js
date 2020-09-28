const initialState = {
  counter: 0,
  text: "world"
};

export const dispatchAdd = {
  type: "DISPATCH_ADD"
};

export const dispatchReduce = {
  type: "DISPATCH_REDUCE"
};

export const dispatchTextChange = {
  type: "DISPATCH_TEXT_CHANGE"
};

export function reducers(state = initialState, action) {
  switch (action.type) {
    case "DISPATCH_ADD": {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case "DISPATCH_REDUCE": {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    case "DISPATCH_TEXT_CHANGE": {
      return {
        ...state,
        text: state.text === "world" ? "react-redux" : "world"
      };
    }
    default:
      return state;
  }
}
