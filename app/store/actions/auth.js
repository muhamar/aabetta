import { errorResponse } from '../../utils/errorResponse';
import { LOGIN, LOGOUT, REGISTER } from '../types';
import { storeToken, removeToken } from '../../utils/token';
import * as authService from '../../services/auth';

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const data = (await authService.login({ username, password })).data;
      dispatch({ type: LOGIN, user: data.peserta });
      await storeToken(data.token);
    } catch (e) {
      throw new Error(errorResponse(e));
    }
  };
};

export const register = (nama, username, password) => {
  return async (dispatch) => {
    try {
      const data = (await authService.register({ nama, username, password }))
        .data;
      dispatch({ type: REGISTER, user: data.peserta });
      await storeToken(data.token);
    } catch (e) {
      throw new Error(errorResponse(e));
    }
  };
};

export const authentication = () => {
  return async (dispatch) => {
    try {
      const data = (await authService.profile()).data;
      dispatch({ type: LOGIN, user: data.data });
    } catch (e) {
      dispatch({ type: LOGOUT });
    }
  };
};

export const updateProfile = (nama, nohp, alamat) => {
  return async (dispatch) => {
    try {
      const data = (await authService.updateProfile({ nama, nohp, alamat }))
        .data;
      dispatch({ type: LOGIN, user: data.peserta });
    } catch (e) {
      throw new Error(errorResponse(e));
    }
  };
};

export const logout = () => {
  removeToken();
  return {
    type: LOGOUT,
  };
};
