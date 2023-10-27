import React, { Component } from "react";
import "./Detail.scss";

export default class Detail extends Component {
  render() {
    let { url } = this.props.glassData;
    return (
      <div className="mt-5 text-center glasses">
        <img
          onClick={() => {
            this.props.handleViewDetail(this.props.glassData);
          }}
          src={url}
          alt=""
          className="row col-12 glasses"
        />
        {/* <div className="tryGlass">
            <img
              src={
                this.props.handleViewDetail
                  ? this.props.handleViewDetail.url
                  : ""
              }
              alt=""
            />
          </div> */}
      </div>
    );
  }
}
