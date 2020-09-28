import { compose } from "redux";

function applyMiddleware(...middlewares) {
  return function({ getState, dispatch }) {
    return function(next) {
      return compose(
        ...middlewares.map(middleware => {
          return middleware({ getState, dispatch });
        })
      )(next);
    };
  };
}

export default applyMiddleware;
