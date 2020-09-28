import React, { Component } from "react";
import RouterContext from "./context";

export default class Link extends Component {
  handleClick = method => {
    return event => {
      event.preventDefault();

      method(this.props.to);
    };
  };

  render() {
    const { to, replace, children, ...otherProps } = this.props;

    return (
      <RouterContext.Consumer>
        {context => {
          const { history } = context;
          const method = replace ? history.replace : history.push;

          return (
            <a {...otherProps} href={to} onClick={this.handleClick(method)}>
              {children}
            </a>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
