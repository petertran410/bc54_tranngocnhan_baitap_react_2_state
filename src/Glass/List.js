import React, { Component } from "react";
import Detail from "./Detail";
import "./List.scss";

export default class List extends Component {
  render() {
    console.log(this.props.glassList);
    return (
      <div className="row list">
        {this.props.glassList.map((item) => {
          return (
            <Detail
              handleViewDetail={this.props.handleChangeGlass}
              glassData={item}
            />
          );
        })}
      </div>
    );
  }
}
