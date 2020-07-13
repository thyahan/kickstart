import React from 'react';

export default WrappedComponent => {
  const withWrap = props => {
    return (
      <div className="wrap-ui-container">
        <WrappedComponent {...props} />
      </div>
    );
  };
  return withWrap;
};
