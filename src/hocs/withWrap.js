import React from 'react';

export default WrappedComponent => {
  const withWrap = props => {
    return (
      <div className="wrap">
        <WrappedComponent {...props} />
      </div>
    );
  };
  return withWrap;
};
