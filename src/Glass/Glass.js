import React, { Component } from "react";
import { dataGlasses } from "../Data/data";
import List from "./List";
import Item from "./Item";
import "./Glass.scss";
import Model from "./Model";

export default class Glass extends Component {
  state = {
    dataGlasses: dataGlasses,
    dataGlassesSelected: dataGlasses[0],
  };

  handleChangeGlass = (glass) => {
    this.setState({ dataGlassesSelected: glass });
  };

  render() {
    return (
      <div>
        <div className="background">
          <Model />

          {/* <Item detail={this.state.dataGlassesSelected} /> */}
        </div>

        {/* <List
          handleChangeGlass={this.handleChangeGlass}
          glassList={this.state.dataGlasses}
        /> */}
      </div>
    );
  }
}
