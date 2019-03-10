import React, { Component } from "react";
import { connect } from "react-redux";
import CampaignItem from "./CampaignItem";

class Campaigns extends Component {
  render() {
    return (
      <ul className="list-group container-fluid campaignsList">
        {this.props.campaigns.map((item, index) => (
          <CampaignItem {...item} skey={index + 1} key={item.id} />
        ))}
      </ul>
    );
  }
}
const mapStateToProps = state => ({ campaigns: state.campaigns });
export default connect(mapStateToProps)(Campaigns);
