// combineReducer({
//   a: aReducer,
//   b: bReducer,
//   c: cReducer
// })
// >>>
// (state, action) => {
//   a: aReducer(state.a, action),
//   b: bReducer(state.b, action),
//   c: cReducer(state.c, action)
// }

export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};

  for (let n = 0; n < reducerKeys.length; n++) {
    const key = reducerKeys[n];

    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);

  return function(state = {}, action) {
    let hasChange = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const prevStateForKey = state[key];
      const nextStateForKey = reducer(prevStateForKey, action);

      nextState[key] = nextStateForKey;
      hasChange = hasChange || nextStateForKey !== prevStateForKey;
    }
    return hasChange ? nextState : state;
  };
}
