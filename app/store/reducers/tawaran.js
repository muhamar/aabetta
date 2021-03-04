import { PUSH_TAWARAN, SET_TAWARAN } from '../types';

const initialState = {
  tawaran: [],
  fetched: false,
};

const lelangReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAWARAN:
      const sorted = action.tawaran.sort(
        (a, b) => Number(a.id_tawaran) - Number(b.id_tawaran),
      );
      return {
        ...state,
        fetched: true,
        tawaran: sorted.reverse(),
      };
    case PUSH_TAWARAN:
      return {
        ...state,
        tawaran: [...state.tawaran, action.tawaran],
      };
    default:
      return state;
  }
};

export default lelangReducer;
