import React, { Component } from "react";
import { dataGlasses } from "../Data/data";
import List from "./List";
import Item from "./Item";

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
        <List
          handleChangeGlass={this.handleChangeGlass}
          glassList={this.state.dataGlasses}
        />
        <Item detal={this.state.dataGlassesSelected} />
      </div>
    );
  }
}
