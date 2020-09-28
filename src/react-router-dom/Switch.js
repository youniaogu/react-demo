import React, { Component, cloneElement } from "react";
import RouterContext from "./context";

export default class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const location = this.props.location || context.location;

          let match, element;
          React.Children.forEach(this.props.children, child => {
            if (!match) {
              element = child;

              const path = child.props.path || child.props.from;

              match = path ? location.pathname === path : context.match;
            }
          });

          if (element && match) {
            return cloneElement(element, { location });
          }
          return null;
        }}
      </RouterContext.Consumer>
    );
  }
}
