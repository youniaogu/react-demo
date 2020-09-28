function createStore(reducer, enhancer) {
  let dispatch = function(action) {
    currentState = reducer(currentState, action);

    for (let n = 0; n < listeners.length; n++) {
      const handleStoreChange = listeners[n];

      handleStoreChange();
    }

    return action;
  };
  const subscribe = function(handleStoreChange) {
    listeners.push(handleStoreChange);

    return function unsubscribe() {
      const index = listeners.indexOf(handleStoreChange);

      listeners.splice(index, 1);
    };
  };
  const getState = function() {
    return currentState;
  };

  let currentState = {};
  let listeners = [];
  let dispatchWithMiddleware = dispatch;

  dispatch({ type: "INIT" }); // 初始化
  if (typeof enhancer === "function") {
    dispatchWithMiddleware = enhancer({
      dispatch: action => dispatchWithMiddleware(action),
      getState
    })(dispatch);
  }

  return {
    dispatch: dispatchWithMiddleware,
    subscribe,
    getState
  };
}

export default createStore;
