export const initial = {
  id: '',
  username: ''
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'FETCH_USER_SUCCESS':
      return { ...payload };
    default:
      return state;
  }
};
