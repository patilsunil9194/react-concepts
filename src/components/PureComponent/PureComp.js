import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component");

    return (
      <div>
        Pure Components
        <h2> {this.props.name}</h2>
      </div>
    );
  }
}

export default PureComp;
