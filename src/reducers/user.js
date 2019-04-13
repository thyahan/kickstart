export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const initial = {
  id: '',
  username: ''
};

export const reducer = (state, { type, user }) => {
  switch (type) {
    case 'FETCH_USER_SUCCESS':
      return { ...user };
    default:
      return state;
  }
};
