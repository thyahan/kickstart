import React, { useReducer, useEffect } from 'react';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import withWrap from '../hocs/withWrap';
import useUserDetail from '../hooks/useUserDetail';

const Home = () => {
  const userId = 21;
  const { id, username } = useUserDetail(userId);

  return (
    <div className="wrap-home">
      <Header />
      <span>{`${id}: ${username}`}</span>
      <Landing />
      <Footer />
    </div>
  );
};

export default withWrap(Home);
