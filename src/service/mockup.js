const getUser = userId => {
  return new Promise((resolve, reject) => {
    if (userId) {
      resolve({
        id: userId,
        username: `iron-man-${userId}`
      });
    }
    reject(new Error('user id is required'));
  });
};

const getBranch = branchId => {
  return new Promise((resolve, reject) => {
    if (branchId) {
      resolve({
        id: 109,
        name: 'BBK-S Plus'
      });
    }
    reject(new Error('branch id is required'));
  });
};

export { getUser, getBranch };
