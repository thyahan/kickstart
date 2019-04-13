import React from 'react';
import Header from '../components/Header';
import Landing from '../components/Landing';
import withWrap from '../hocs/withWrap';

const HookPage = () => {
  return (
    <>
      <Header />
      <Landing />
    </>
  );
};

export default withWrap(HookPage);
