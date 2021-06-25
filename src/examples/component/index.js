import React, { Component } from "react";
import Progress from "../../components/progress";

class Examples extends Component {
  state = {
    percent: 10,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { percent } = this.state;

    return (
      <div>
        <h1>Component</h1>
        <div style={{ width: "720px" }}>
          <input
            type="number"
            name="percent"
            value={percent}
            min={0}
            max={100}
            onChange={this.handleInputChange}
          />
          <p>背景宽度拉满：</p>
          <Progress percent={percent} />
          <p>背景宽度不拉满：</p>
          <Progress percent={percent} changeSize={false} />
        </div>
      </div>
    );
  }
}

export default Examples;
