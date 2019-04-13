import React from 'react';
import useSystemContext from '../hooks/useSystemContext';
import { LOGIN_SUCCESS } from '../reducers/system';

const UserDetail = () => {
  const [{ token, userId }, dispatch] = useSystemContext();
  const updateContext = () => {
    dispatch({
      type: LOGIN_SUCCESS,
      session: {
        token: 'god_session_9988',
        userId: parseFloat(userId) + 1
      }
    });
  };
  return (
    <div>
      <hr />
      <button onClick={updateContext}>updateContext</button>
      <span>token: {token}</span>
      <span>userId: {userId}</span>
    </div>
  );
};

export default UserDetail;
