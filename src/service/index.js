import { GET, POST, DELETE, PUT } from './method';
import { USER } from './APIs';

const getUser = () => GET(USER);
const createUser = data => POST(USER, data);
const updateUser = (userId, data) => PUT(`${USER}/${userId}`, data);
const deleteUser = userId => DELETE(`${USER}/${userId}`);

export { getUser, createUser, updateUser, deleteUser };
