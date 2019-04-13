export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const INITIAL_APP = 'INITIAL_APP';

export const initialApp = () => {
  return dispatch => {
    return dispatch({
      type: INITIAL_APP,
      data: {
        authen: true
      }
    });
  };
};
