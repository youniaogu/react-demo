import React, { Component, Fragment } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter,
  Link,
  Redirect
} from "../../react-router-dom";

class PTF extends Component {
  handleClick = text => {
    return () => {
      this.props.history.push(text);
    };
  };

  render() {
    return (
      <Fragment>
        <h1>react_router_dom-demo</h1>
        <Switch>
          <Route path="/react-router-dom/">
            <div>Main</div>
          </Route>
          <Route path="/react-router-dom/page">
            <div>Page</div>
          </Route>
          <Route path="/react-router-dom/title">
            <div>Title</div>
          </Route>
          <Route path="/react-router-dom/footer">
            <div>Footer</div>
          </Route>
          <Redirect path="/redirect" to="/404" />
        </Switch>
        <p>Link Component jump：</p>
        <Link to={"/react-router-dom/"}>main</Link>
        <span>　</span>
        <Link to={"/react-router-dom/page"}>page</Link>
        <span>　</span>
        <Link to={"/react-router-dom/title"}>title</Link>
        <span>　</span>
        <Link to={"/react-router-dom/footer"}>footer</Link>
        <p>withRouter pass history props jump：</p>
        <button onClick={this.handleClick("/react-router-dom/")}>main</button>
        <button onClick={this.handleClick("/react-router-dom/page")}>
          page
        </button>
        <button onClick={this.handleClick("/react-router-dom/title")}>
          title
        </button>
        <button onClick={this.handleClick("/react-router-dom/footer")}>
          footer
        </button>
      </Fragment>
    );
  }
}

const WithedComponent = withRouter(PTF);

class Examples extends Component {
  handleClick = text => {
    return () => {
      this.props.history.push(text);
    };
  };

  render() {
    return (
      <BrowserRouter>
        <WithedComponent />
      </BrowserRouter>
    );
  }
}

export default Examples;
