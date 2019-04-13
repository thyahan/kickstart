import { LOGIN_SUCCESS, LOGOUT_SUCCESS, INITIAL_APP } from '../actions/system';

const initialState = {
  token: '',
  userId: '',
  authen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.session };
    case LOGOUT_SUCCESS:
      return { token: '', userId: '' };
    case INITIAL_APP:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
