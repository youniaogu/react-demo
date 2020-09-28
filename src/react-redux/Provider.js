import React, { Component } from "react";
import StoreContext from "./context";
import PropTypes from "prop-types";

export default class Provider extends Component {
  render() {
    return (
      <StoreContext.Provider value={this.props.store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  })
};
