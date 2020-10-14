import React, { Component, Fragment } from "react";
import styles from "./index.module.css";
import VirtualList from "../../virtual-list";

class Examples extends Component {
  renderListItem = item => {
    return (
      <div key={item} className={styles.item}>
        {item}
      </div>
    );
  };

  render() {
    const list = new Array(100000).fill(null).map((_, index) => {
      return index + 1;
    });

    return (
      <Fragment>
        <h1>virtual_list-demo</h1>
        <VirtualList
          cache={5}
          list={list}
          itemHeight={60}
          height={500}
          renderItem={this.renderListItem}
        />
      </Fragment>
    );
  }
}

export default Examples;
