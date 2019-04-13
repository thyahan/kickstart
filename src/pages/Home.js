import React, { useState } from 'react';
import withWrap from '../hocs/withWrap';
import useUserDetail from '../hooks/useUserDetail';

const ViewUser = () => {
  const [userId, setUserId] = useState(1);
  const user = useUserDetail(userId);

  const handleOnSwitchUser = () => {
    setUserId(userId + 1);
  };

  return (
    <div className="wrap-hook-page">
      <span>{`${user.id}: ${user.username}`}</span>
      <button onClick={handleOnSwitchUser}>Switch User</button>
      <hr />
    </div>
  );
};

const HookPage = () => {
  return (
    <div>
      <ViewUser />
    </div>
  );
};

export default withWrap(HookPage);
