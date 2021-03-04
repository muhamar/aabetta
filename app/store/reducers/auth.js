import { LOGIN, LOGOUT, REGISTER } from '../types';

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        user: action.user,
      };
    case LOGIN:
      return {
        user: action.user,
      };
    case LOGOUT:
      return {
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
