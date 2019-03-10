import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampaign } from "../actions";

class Header extends Component {
  newCampaignHandler() {
    let result = prompt("Give name of campaign", "");
    this.props.addCampaign(result, new Date().toLocaleTimeString());
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
  addCampaign: (title, time) => dispatch(addCampaign(title, time))
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
