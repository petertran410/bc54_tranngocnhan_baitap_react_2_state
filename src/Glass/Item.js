import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { name, desc } = this.props.items;

    return (
      <div>
        <div>{name}</div>
        <div>{desc}</div>
      </div>
    );
  }
}
