import React, { Component } from "react";
import { shallowEqual } from "@babel/types";
import StoreContext from "./context";

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function wrapWithCopmonent(WrappedComponent) {
    return class Connect extends Component {
      static contextType = StoreContext;

      constructor(props, context) {
        super(props, context);

        this.store = props.store || context;
        this.state = {
          storeState: this.store.getState()
        };
      }

      componentDidMount() {
        if (!this.unSubscribe) {
          this.unSubscribe = this.store.subscribe(
            this.handleStoreChange.bind(this)
          );
        }
      }

      shouldComponentUpdate(nextProps, nextState) {
        return !(
          shallowEqual(this.state.storeState, nextState.storeState) ||
          shallowEqual(
            mapStateToProps(this.state.storeState, this.props),
            mapStateToProps(nextState.storeState, nextProps)
          )
        );
      }

      componentWillUnmount() {
        if (this.unSubscribe) {
          this.unSubscribe();
        }
        this.clearCache();
      }

      handleStoreChange() {
        if (!this.unSubscribe) {
          return;
        }

        const prevStoreState = this.state.storeState;
        const storeState = this.store.getState();

        if (prevStoreState !== storeState) {
          this.setState({ storeState });
        }
      }

      clearCache() {
        this.store = null;
        this.unSubscribe = null;
      }

      render() {
        const storeState = this.state.storeState;

        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(storeState, this.props)}
            {...mapDispatchToProps(this.store.dispatch, this.props)}
          />
        );
      }
    };
  };
}
