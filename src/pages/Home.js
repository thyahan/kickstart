import React, { useState } from 'react';
import withWrap from '../hocs/withWrap';
import useUserDetail from '../hooks/useUserDetail';
import useSystemContext from '../hooks/useSystemContext';
import LoginForm from '../components/LoginForm';
import UserDetail from '../components/UserDetail';
import { LOGIN_SUCCESS } from '../reducers/system';

const ViewUser = () => {
  const [userId, setUserId] = useState(1);
  const user = useUserDetail(userId);
  const [system, dispatch] = useSystemContext();
  const updateContext = () => {
    dispatch({
      type: LOGIN_SUCCESS,
      session: {
        token: 'god_session_9988',
        userId: parseFloat(system.userId) + 1
      }
    });
  };

  return (
    <div className="wrap-hook-page">
      <button onClick={updateContext}>updateContext</button>
      <span>token: {system.token}</span>
      <span>userId: {system.userId}</span>
    </div>
  );
};

const HookPage = () => {
  return (
    <div>
      <ViewUser />
      <LoginForm />
      <UserDetail />
    </div>
  );
};

export default withWrap(HookPage);
