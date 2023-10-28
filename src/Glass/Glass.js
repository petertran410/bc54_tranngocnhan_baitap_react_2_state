import React, { Component } from "react";
import { glassArr } from "../Data/data";
import "./Glass.scss";
import Content from "../Content/Content";
import List from "../GlassSelection/List";

export default class Glass extends Component {
  state = {
    glassArr: glassArr,
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
                <div className="glasses_1">
                  <img
                    src={
                      this.state.glassSelected
                        ? this.state.glassSelected.url
                        : ""
                    }
                    alt="Glass"
                  />
                </div>
                <Content
                  title={this.state.glassTitle}
                  content={this.state.glassContent}
                />
              </div>
            </div>
            <div className="col-6 text-center">
              <img
                className="w-50"
                src={this.state.glassModelImage}
                alt="model"
              />
            </div>
          </div>
          <List
            selectedGlass={this.selectedGlass}
            glassArr={this.state.glassArr}
          />
        </div>
      </div>
    );
  }
}
