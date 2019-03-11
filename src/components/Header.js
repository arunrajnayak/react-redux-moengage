import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampaign, fetchData } from "../actions";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  newCampaignHandler() {
    let result = prompt("Give name of campaign", "");
    this.props.addCampaign(result, new Date().toLocaleTimeString());
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="header ">
        <div className="header__title container-fluid">All Campaigns</div>
        <div className="header__subTitle container-fluid">
          Campaign List
          <button
            type="button"
            className="createBtn btn btn-info"
            onClick={e => this.newCampaignHandler(e)}
          >
            + Create New
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCampaign: (title, time) => dispatch(addCampaign(title, time)),
  fetchData: () => dispatch(fetchData())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
