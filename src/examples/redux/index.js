import React, { Component } from "react";
import { dispatchAdd, dispatchReduce, dispatchChangeText } from "./store";
import { createStore, applyMiddleware } from "../../redux";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./store";

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(reducer, middlewares);

class Counter extends Component {
  handleAdd = () => {
    this.props.add();
  };
  handleReduce = () => {
    this.props.reduce();
  };
  handleTextChange = () => {
    this.props.changeText();
  };

  render() {
    return (
      <React.Fragment>
        <h1>redux-demo</h1>
        <p>hello {this.props.text}</p>
        <button onClick={this.handleTextChange}>change Text</button>
        <p>click {this.props.counter}</p>
        <button onClick={this.handleAdd}>add</button>
        <button onClick={this.handleReduce}>reduce</button>
      </React.Fragment>
    );
  }
}

const ConnectedComponent = connect(
  state => {
    return {
      counter: state.counter,
      text: state.text
    };
  },
  {
    add: dispatchAdd,
    reduce: dispatchReduce,
    changeText: dispatchChangeText
  }
)(Counter);

class Examples extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedComponent />
      </Provider>
    );
  }
}

export default Examples;
