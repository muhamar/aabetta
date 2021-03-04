import { errorResponse } from '../../utils/errorResponse';
import { PUSH_TAWARAN } from '../types';
import * as lelangService from '../../services/lelang';

export const pushTawaran = (id_lelang, tawaran) => {
  return async (dispatch) => {
    try {
      const data = (await lelangService.pushTawaran({ id_lelang, tawaran }))
        .data;
      dispatch({ type: PUSH_TAWARAN, tawaran: data.tawaran });
    } catch (e) {
      throw new Error(errorResponse(e));
    }
  };
};
