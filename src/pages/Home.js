import React, { useReducer, useEffect } from 'react';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import withWrap from '../hocs/withWrap';
import { initial, reducer } from '../reducers/user';

const Home = () => {
  const [{ id, username }, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    dispatch({
      type: 'FETCH_USER_SUCCESS',
      payload: {
        id: 21,
        username: 'meitoey'
      }
    });
  }, []);

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
