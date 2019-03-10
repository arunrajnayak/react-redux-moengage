import React, { Component } from "react";

class LogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-group-item">
        <div>{this.props.logType}</div>
        <div>
          Campaign {this.props.label} {this.props.info}
        </div>
      </li>
    );
  }
}

export default LogItem;
