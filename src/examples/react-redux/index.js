import React, { Component } from "react";
import { dispatchAdd, dispatchReduce, dispatchTextChange } from "./store";
import { Provider, connect } from "../../react-redux";
import { createStore } from "redux";
import { reducers } from "./store";

const store = createStore(reducers);

class Text extends Component {
  handleTextChange = () => {
    this.props.textChange();
  };

  render() {
    return (
      <React.Fragment>
        <p>hello {this.props.text}</p>
        <button onClick={this.handleTextChange}>change!</button>
      </React.Fragment>
    );
  }
}

const ConnectedText = connect(
  state => {
    return {
      text: state.text
    };
  },
  dispatch => {
    return {
      textChange: () => {
        dispatch(dispatchTextChange);
      }
    };
  }
)(Text);

class Counter extends Component {
  handleAdd = () => {
    this.props.add();
  };
  handleReduce = () => {
    this.props.reduce();
  };

  render() {
    return (
      <React.Fragment>
        <p>click {this.props.counter}</p>
        <button onClick={this.handleAdd}>add</button>
        <button onClick={this.handleReduce}>reduce</button>
      </React.Fragment>
    );
  }
}

const ConnectedCounter = connect(
  state => {
    return {
      counter: state.counter
    };
  },
  dispatch => {
    return {
      add: function() {
        dispatch(dispatchAdd);
      },
      reduce: function() {
        dispatch(dispatchReduce);
      }
    };
  }
)(Counter);

export default class SimpleReactRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>react_redux-demo</h1>
          <ConnectedText />
          <ConnectedCounter />
        </div>
      </Provider>
    );
  }
}
