import React from 'react';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import withWrap from '../hocs/withWrap';

const Home = () => {
  return (
    <div className="wrap-home">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
};

export default withWrap(Home);
