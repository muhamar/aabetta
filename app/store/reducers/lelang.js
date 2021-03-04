import moment from 'moment';
import { SET_LELANG, FILTER_COME, FILTER_WILL_COME } from '../types';

const initialState = {
  lelang: [],
  willCome: [],
  come: [],
  end: [],
  filtered: [],
  fetched: false,
};

const lelangReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LELANG:
      const willCome = [];
      const come = [];
      const end = [];
      action.lelang.map((item) => {
        const a = moment(item.waktu_mulai);
        const b = moment(item.waktu_selesai);
        const c = moment.utc();
        const d = c.diff(a, 'second');
        const e = c.diff(b, 'second');
        if (d < 0) {
          willCome.push(item);
        } else if (d > 0 && e < 0) {
          come.push({ ...item, come: true });
        } else {
          end.push(item);
        }
      });
      return {
        ...state,
        fetched: true,
        lelang: action.lelang,
        willCome,
        come,
        end,
        filtered: come,
      };
    case FILTER_COME:
      return {
        ...state,
        filtered: state.come,
      };
    case FILTER_WILL_COME:
      return {
        ...state,
        filtered: state.willCome,
      };
    default:
      return state;
  }
};

export default lelangReducer;
