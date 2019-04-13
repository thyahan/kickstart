import { FETCH_USER_SUCCESS } from '../actions/user';

const initialState = {
  id: '',
  username: ''
};

export default (state = initialState, { type, user }) => {
  switch (type) {
    case FETCH_USER_SUCCESS:
      return { ...user };
    default:
      return state;
  }
};
