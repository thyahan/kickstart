import React, { Component } from "react";
import { Icon, Button } from "@blueprintjs/core";
class Header extends Component {
  render() {
    return (
      <div className="wrap-header">
        <div className="col">
          <a>
            <h2>Public Board</h2>
          </a>
        </div>
        <div className="col action-group">
          <div className="action-group">
            <Button icon="add">CREATE ACCOUT</Button>
            <Button icon="log-in">LOGIN</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
