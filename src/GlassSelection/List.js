import React, { Component } from "react";
import GlassSelection from "./GlassSelection";

export default class List extends Component {
  render() {
    console.log(this.props.glassArr);
    return (
      <div className="row">
        <div className="col-12 p-5 mt-5 bg-gray text-center glasses">
          {this.props.glassArr.map((glass) => {
            return (
              <GlassSelection
                selectedGlass={this.props.selectedGlass}
                glassData={glass}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
