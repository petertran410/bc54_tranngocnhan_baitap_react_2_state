import React, { Component } from "react";
import Detail from "./Detail";

export default class List extends Component {
  render() {
    console.log(this.props.glassList);
    return (
      <div>
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
