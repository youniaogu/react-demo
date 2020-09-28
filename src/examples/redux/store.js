import { combineReducers } from "../../redux";

export function dispatchAdd() {
  return function(dispatch, getState) {
    return dispatch({
      type: "DISPATCH_ADD"
    });
  };
}

export function dispatchReduce() {
  return {
    type: "DISPATCH_REDUCE"
  };
}

export function dispatchChangeText() {
  return {
    type: "DISPATCH_CHANGE_TEXT"
  };
}

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case "DISPATCH_ADD":
      return state + 1;
    case "DISPATCH_REDUCE":
      return state - 1;
    default:
      return state;
  }
}

export function textReducer(state = "world", action) {
  switch (action.type) {
    case "DISPATCH_CHANGE_TEXT":
      return state === "world" ? "redux" : "world";
    default:
      return state;
  }
}

const reducer = combineReducers({
  counter: counterReducer,
  text: textReducer
});

export default reducer;
