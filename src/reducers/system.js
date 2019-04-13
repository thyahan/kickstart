export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const initialState = {
  token: '12',
  userId: '13'
};

export const reducer = (state, { type, session }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...session };
    case LOGOUT_SUCCESS:
      return { token: '', userId: '' };
    default:
      return state;
  }
};
