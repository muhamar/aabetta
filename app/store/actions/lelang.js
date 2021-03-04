import { errorResponse } from '../../utils/errorResponse';
import {
  FILTER_COME,
  FILTER_WILL_COME,
  SET_LELANG,
  SET_TAWARAN,
} from '../types';
import * as lelangService from '../../services/lelang';

export const fetchLelang = () => {
  return async (dispatch) => {
    try {
      const data = (await lelangService.fetchLelang()).data.data;
      dispatch({ type: SET_LELANG, lelang: data.lelang });
      dispatch({ type: SET_TAWARAN, tawaran: data.tawaran });
    } catch (e) {
      throw new Error(errorResponse(e));
    }
  };
};

export const filterCome = () => {
  return {
    type: FILTER_COME,
  };
};

export const filterWillCome = () => {
  return {
    type: FILTER_WILL_COME,
  };
};
