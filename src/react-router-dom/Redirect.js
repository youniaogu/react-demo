import { Component } from "react";
import RouterContext from "./context";

export default class Redirect extends Component {
  static contextType = RouterContext;

  constructor(props, context) {
    super(props, context);

    const { push = false } = props;
    const { history } = context;

    this.method = push ? history.push : history.replace;
  }

  componentDidMount() {
    this.method(this.props.to);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.to !== this.props.to) {
      this.method(this.props.to);
    }
  }

  render() {
    return null;
  }
}
