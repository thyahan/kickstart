import React from 'react';
import { Button } from '@blueprintjs/core';

const Header = () => {
  return (
    <div className="wrap-header">
      <div className="col">
        <h2>Public Board</h2>
      </div>
      <div className="col action-group">
        <div className="action-group">
          <Button icon="add">CREATE ACCOUT</Button>
          <Button icon="log-in">LOGIN</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
