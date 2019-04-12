import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';

export default WrappedComponent => {
  const withLoading = props => {
    const { isLoading } = props;
    if (isLoading) return <Loading />;
    return <WrappedComponent {...props} />;
  };

  withLoading.propTypes = {
    isLoading: PropTypes.bool
  };

  withLoading.defaultProps = {
    isLoading: false
  };

  return withLoading;
};
