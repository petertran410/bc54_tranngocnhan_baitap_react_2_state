import React, { Component } from "react";
import "./GlassSelection.scss";

export default class GlassSelection extends Component {
  render() {
    let { url } = this.props.glassData;
    return (
      <img
        onClick={() => this.props.selectedGlass(this.props.glassData)}
        src={url}
        alt="Glass"
      />
    );
  }
}
