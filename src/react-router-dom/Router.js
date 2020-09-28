import React, { Component } from "react";
import RouterContext from "./context";

export default class Router extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.history.location
    };
    this._isMounted = false;

    this.uninstall = props.history.listen(({ location }) => {
      if (this._isMounted) {
        this.setState({
          location
        });
      }
    });
  }

  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this.uninstall();
    this._isMounted = false;
  }

  render() {
    const { location } = this.state;
    const { history, children } = this.props;

    return (
      <RouterContext.Provider
        value={{
          location,
          history,
          match: {
            path: "/",
            url: "/",
            params: {},
            isExact: location.pathname === "/"
          }
        }}
      >
        {children}
      </RouterContext.Provider>
    );
  }
}
