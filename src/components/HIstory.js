import React, { Component } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";

class History extends Component {
  render() {
    return (
      <ul className="container-fluid campaignHistory list-group">
        {this.props.logs.map((item, index) => (
          <LogItem {...item} key={index} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  logs: state.logs
});

export default connect(mapStateToProps)(History);
