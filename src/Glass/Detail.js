import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    let { url } = this.props.glassData;
    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th>
                <img
                  onClick={() => {
                    this.props.handleViewDetail(this.props.glassData);
                  }}
                  src={url}
                  alt=""
                />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
