import React, { Component } from "react";
import "./Page1.css";
import imageUrl from "./images/timg.jpg"

export default class Page1 extends Component {
  render() {
    return (
      <div className="page-box">
        this is Page1~
        <img src={imageUrl} />
      </div>
    );
  }
}
