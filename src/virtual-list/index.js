import React, { Component } from "react";
import PropTypes from "prop-types";

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
    const index = scrollTop / itemHeight;
    const startIndex = Math.floor(index);
    const offsetIndex = index % 1 > 0 ? 1 : 0;

    if (startIndex >= cache) {
      this.startIndex = startIndex - cache;
    } else {
      this.startIndex = 0;
    }

    if (startIndex >= list.length - (this.visibleCount + cache + offsetIndex)) {
      this.endIndex = list.length;
    } else {
      this.endIndex = startIndex + this.visibleCount + cache + offsetIndex;
    }

    this.updateVisibleData();
  };

  render() {
    const { visibleData, startOffset, offsetHeight } = this.state;
    const { height, renderItem, className, style } = this.props;

    return (
      <div
        style={{
          ...style,
          position: "relative",
          overflowY: "auto",
          height: height
        }}
        className={className}
        ref={node => (this.node = node)}
        onScroll={this.handleScroll}
      >
        <div style={{ height: this.totalHeight }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: startOffset,
              height: offsetHeight
            }}
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
