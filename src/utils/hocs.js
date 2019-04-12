import React from "react";
import Loading from "../components/Loading";

export const withWrap = Component => {
  return class ComponentWithWrap extends React.Component {
    render() {
      return (
        <div className="wrap">
          <Component {...this.props} />
        </div>
      );
    }
  };
};

export const withLoading = Component => {
  return class ComponentWithWrap extends React.Component {
    render() {
      const isLoading = false;
      if (isLoading) return <Loading />;
      return <Component {...this.props} />;
    }
  };
};