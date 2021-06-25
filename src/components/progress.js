import React, { Component } from "react";

class progress extends Component {
  render() {
    const { percent, changeSize = true } = this.props;

    return (
      <div
        style={{
          height: "16px",
          width: "100%",
          borderRadius: "8px",
          background: "#dddddd",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            borderRadius: "8px",
            background: "linear-gradient(to right, #ff3737, #3939ff)",
            backgroundSize: changeSize
              ? `${10000 / (percent > 100 ? 100 : percent)}%`
              : "100%",
          }}
        />
      </div>
    );
  }
}

export default progress;
