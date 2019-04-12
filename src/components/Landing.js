import React, { Component } from "react";
import { Button, H3 } from "@blueprintjs/core";
const imageSrc =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

const backgroundImage = `url(${imageSrc})`;
class Landing extends Component {
  render() {
    return (
      <div className="wrap-landing">
        <h1>Welcom To Public Board</h1>
        {/* <img className="image" src={imageSrc} /> */}
        <div className="bg-img" style={{ backgroundImage }}>
          <button className="btn-landing">Start Now</button>
        </div>
      </div>
    );
  }
}

export default Landing;
