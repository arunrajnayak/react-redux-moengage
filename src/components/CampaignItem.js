import React, { Component } from "react";
import { editCampaign, deleteCampaign, pauseCampaign } from "../actions";
import { connect } from "react-redux";

class CampaignItem extends Component {
  constructor(props) {
    super(props);
  }
  editHandler(id) {
    let result = prompt("Give new name of campaign", "");
    this.props.editCampaign(id, result, new Date().toLocaleTimeString());
  }
  deleteHandler(id) {
    this.props.deleteCampaign(id);
  }
  pauseHandler(id) {
    this.props.pauseCampaign(id);
  }
  render() {
    return (
      <li key={this.props.skey} className="list-group-item">
        <div className="campaignDesc">
          <div className="cmp_number">{this.props.skey}</div>
          <div className="cmp-info">
            <div>{this.props.title}</div>
            <div>Created At: {this.props.time}</div>
          </div>
        </div>
        <div className="campaignActions">
          <div
            className="action-item"
            onClick={() => this.pauseHandler(this.props.id)}
          >
            <i className="far fa-pause-circle" />
            <p className="action-desc">Pause</p>
          </div>
          <div
            className="action-item"
            onClick={() => this.editHandler(this.props.id)}
          >
            <i className="far fa-edit" />
            <p className="action-desc">Edit</p>
          </div>
          <div className="action-item">
            <i className="far fa-edit" />
            <p className="action-desc">Comment</p>
          </div>
          <div
            className="action-item"
            onClick={() => this.deleteHandler(this.props.id)}
          >
            <i className="far fa-trash-alt" />
            <p className="action-desc">Delete</p>
          </div>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editCampaign: (id, title, time) => dispatch(editCampaign(id, title, time)),
  deleteCampaign: id => dispatch(deleteCampaign(id)),
  pauseCampaign: id => dispatch(pauseCampaign(id))
});

export default connect(
  null,
  mapDispatchToProps
)(CampaignItem);
