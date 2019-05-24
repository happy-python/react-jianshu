import { combineReducers } from 'redux';
import headerReducer from './header';
import homeReducer from './home';
import detailReducer from './detail';
import loginReducer from './login';

// 对reducers进行拆分
export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})
