import React, { Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import SimpleRedux from "./examples/redux";
import SimpleReactRedux from "./examples/react-redux";
import SimpleReactRouterDom from "./examples/react-router-dom";
import VirtualList from "./examples/virtual-list";
import Component from "./examples/component";

function App() {
  return (
    <Fragment>
      <Link to="/redux">redux-demo</Link>
      <span>　　　</span>
      <Link to="/react-redux">react_redux-demo</Link>
      <span>　　　</span>
      <Link to="/react-router-dom">react_router_dom-demo</Link>
      <span>　　　</span>
      <Link to="/virtual-list">virtual_list-demo</Link>
      <span>　　　</span>
      <Link to="/component">component</Link>
      <div>
        <Switch>
          <Route path="/redux" component={SimpleRedux} />
          <Route path="/react-redux" component={SimpleReactRedux} />
          <Route path="/react-router-dom" component={SimpleReactRouterDom} />
          <Route path="/virtual-list" component={VirtualList} />
          <Route path="/component" component={Component} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
