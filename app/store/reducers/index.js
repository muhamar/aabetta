import { combineReducers } from 'redux';

import authReducer from './auth';
import lelangReducer from './lelang';
import tawaranReducer from './tawaran';

const rootReducers = combineReducers({
  auth: authReducer,
  lelang: lelangReducer,
  tawaran: tawaranReducer,
});

export default rootReducers;
