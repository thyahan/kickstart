import { useState, useEffect } from 'react';
import { getUser } from '../service/mockup';

export default userId => {
  const [user, setUser] = useState({});

  const callGetUser = async () => {
    const res = await getUser(userId);
    setUser(res);
  };

  useEffect(() => {
    callGetUser();
  }, [userId]);

  return user;
};
