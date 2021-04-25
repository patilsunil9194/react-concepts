import React, { Component } from "react";
import RegComponent from "./RegComponent";
import PureComp from "./PureComp";
import MemoComponent from "../memo/MemoComponent";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sunil Patil",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Sunil Patil" });
    }, 2000);
  }
  render() {
      console.log("Rendering Parent Components")
    return (
      <div>
        <h1>Parent Component</h1>
        <MemoComponent name={this.state.name} />
       {/*  <RegComponent name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}
