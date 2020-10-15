import React, { Component, Fragment } from "react";
import styles from "./index.module.css";
import VirtualList from "../../virtual-list";

class Examples extends Component {
  constructor() {
    super();

    this.state = {
      length: 10000,
      cache: 1,
      showList: false,
      showVirtualList: false
    };
    this.list = new Array(10000).fill(null).map((_, index) => {
      return index + 1;
    });
  }

  handleLengthChange = e => {
    this.setState({ length: +e.currentTarget.value });
  };
  handleCacheChange = e => {
    this.setState({ cache: +e.currentTarget.value });
  };

  createList = () => {
    this.list = new Array(this.state.length).fill(null).map((_, index) => {
      return index + 1;
    });
  };
  handleListCreate = () => {
    this.createList();
    this.setState({
      showList: true
    });
  };
  handleVirtualListCreate = () => {
    this.createList();
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
    const { length, cache } = this.state;

    return (
      <Fragment>
        <h1>virtual_list-demo</h1>
        <label>length：</label>
        <input
          min="0"
          type="number"
          value={length}
          onChange={this.handleLengthChange}
        />
        <span>　</span>
        <label>cache：</label>
        <input
          min="0"
          type="number"
          value={cache}
          onChange={this.handleCacheChange}
        />
        <span>　</span>

        <button onClick={this.handleListCreate} title="cache useless">
          create list
        </button>
        <span>　</span>
        <button onClick={this.handleVirtualListCreate}>
          create virtual-list
        </button>

        <div className={styles.flexBox}>
          <div className={styles.flexItem}>
            <p>虚拟列表：</p>
            {this.state.showVirtualList && (
              <VirtualList
                className={styles.virtualList}
                cache={cache}
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
