import React, { Component } from "react";

export default class RegComponent extends Component {
  render() {
      console.log("Regular Component")
    return (
      <div>
        RegComponent
        <h2> {this.props.name}</h2>
      </div>
    );
  }
}
