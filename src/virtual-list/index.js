import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class VirtualList extends Component {
  constructor(props) {
    super(props);

    const { list, cache, height, itemHeight } = props;
    this.state = { visibleData: [], startOffset: 0, offsetHeight: 0 };
    this.totalHeight = list.length * itemHeight;
    this.visibleCount = Math.ceil(height / itemHeight);
    this.startIndex = 0;
    this.endIndex = this.startIndex + this.visibleCount + cache;
  }

  componentDidMount() {
    this.updateVisibleData();
  }

  updateVisibleData = () => {
    const { list, itemHeight } = this.props;
    const visibleData = list.slice(this.startIndex, this.endIndex);
    const startOffset = this.startIndex * itemHeight;
    const offsetHeight = visibleData.length * itemHeight;

    this.setState({
      visibleData,
      startOffset,
      offsetHeight
    });
  };
  handleScroll = e => {
    const { list, cache, itemHeight } = this.props;
    const scrollTop = this.node.scrollTop;
    const startIndex = Math.floor(scrollTop / itemHeight);

    if (startIndex >= cache) {
      this.startIndex = startIndex - cache;
    } else {
      this.startIndex = 0;
    }

    if (startIndex >= list.length - (this.visibleCount + cache + 1)) {
      this.endIndex = list.length;
    } else {
      this.endIndex = startIndex + this.visibleCount + cache + 1;
    }

    this.updateVisibleData();
  };

  render() {
    const { visibleData, startOffset, offsetHeight } = this.state;
    const { height, renderItem } = this.props;

    return (
      <div
        style={{ height: height }}
        className={styles.wrapper}
        ref={node => (this.node = node)}
        onScroll={this.handleScroll}
      >
        <div style={{ height: this.totalHeight }}>
          <div
            className={styles.offsetWrapper}
            style={{ top: startOffset, height: offsetHeight }}
          >
            {visibleData.map(renderItem)}
          </div>
        </div>
      </div>
    );
  }
}

VirtualList.propTypes = {
  height: PropTypes.number.isRequired,
  itemHeight: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
  cache: PropTypes.number,
  list: PropTypes.array
};

VirtualList.defaultProps = {
  cache: 0,
  list: []
};

export default VirtualList;
