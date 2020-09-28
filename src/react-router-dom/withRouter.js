import React, { Component } from "react";
import hoistStatics from "hoist-non-react-statics";
import RouterContext from "./context";

export default function withRouter(WrapComponent) {
  class WrappedComponent extends Component {
    render() {
      return (
        <RouterContext.Consumer>
          {context => {
            return <WrapComponent {...this.props} {...context} />;
          }}
        </RouterContext.Consumer>
      );
    }
  }

  return hoistStatics(WrappedComponent, WrapComponent);
}
