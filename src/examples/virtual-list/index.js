import React, { Component, Fragment } from "react";
import styles from "./index.module.css";
import VirtualList from "../../virtual-list";

class Examples extends Component {
  constructor() {
    super();

    this.state = {
      showList: false,
      showVirtualList: false
    };
    this.list = new Array(10000).fill(null).map((_, index) => {
      return index + 1;
    });
  }

  handleListCreate = () => {
    this.setState({
      showList: true
    });
  };
  handleVirtualListCreate = () => {
    this.setState({
      showVirtualList: true
    });
  };

  renderListItem = item => {
    return (
      <div key={item} className={styles.item}>
        {item}
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        <h1>virtual_list-demo</h1>
        <button onClick={this.handleListCreate}>create list</button>
        <span> </span>
        <button onClick={this.handleVirtualListCreate}>
          create virtual-list
        </button>

        <div className={styles.flexBox}>
          <div className={styles.flexItem}>
            <p>虚拟列表：</p>
            {this.state.showVirtualList && (
              <VirtualList
                className={styles.virtualList}
                cache={2}
                list={this.list}
                itemHeight={60}
                height={600}
                renderItem={this.renderListItem}
              />
            )}
          </div>

          <div className={styles.flexItem}>
            <p>普通列表：</p>
            {this.state.showList && (
              <div className={styles.list}>
                {this.list.map(this.renderListItem)}
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Examples;
