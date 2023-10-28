import React, { Component } from "react";
import { glassArr } from "../Data/data";
import "./Glass.scss";

export default class Glass extends Component {
  state = {
    glassSelected: glassArr[0],
    glassModelImage: "./glassesImage/model.jpg",
    glassTitle: glassArr[0].name,
    glassContent: glassArr[0].desc,
  };

  selectedGlass = (glass) => {
    this.setState({
      glassSelected: glass,
      glassModelImage: "./glassesImage/model.jpg",
      glassTitle: glass.name,
      glassContent: glass.desc,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-6 text-center">
              <div className="img">
                <img
                  className="w-50"
                  src={this.state.glassModelImage}
                  alt="Glass"
                />
                <div className="glasses">
                  <img src={this.state.glassSelected ? this.state.glassSelected.url : ""} alt="Glass" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
