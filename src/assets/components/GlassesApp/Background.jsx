import React, { Component } from "react";
import ContentGlasses from "./ContentGlasses";
import TitleGlasses from "./TitleGlasses";

export default class Background extends Component {
  render() {
    return (
      <div className="background-glasses">
        <div className="bg-glasses"></div>
        <div className="overlay"></div>
        <TitleGlasses />
        <ContentGlasses />
      </div>
    );
  }
}
