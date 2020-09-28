import React, { Component } from "react";
import RouterContext from "./context";

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { match, path, children } = this.props;
          const { location } = context;

          const isMatch = match
            ? match
            : path
            ? location.pathname === path
            : context.match;

          if (isMatch) {
            return children;
          } else {
            return null;
          }
        }}
      </RouterContext.Consumer>
    );
  }
}
