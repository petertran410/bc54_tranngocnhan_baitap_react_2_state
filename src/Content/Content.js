import React, { Component } from 'react';
import "./Content.scss";

export default class Content extends Component {
  render() {
    const {title, content} = this.props;

    return (
      <div className="content">
        <h6 className="glass__title">
          {title}
        </h6>
        <p className="glass__content">
          {content}
        </p>
      </div>
    )
  }
}
