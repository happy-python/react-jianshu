import { FETCH_DETAIL_DATA } from '../actionTypes';

const initialState = {
  title: '',
  content: ''
};

// 不要修改state，所以需要新建一个副本，在副本上进行修改
export default function detailReducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case FETCH_DETAIL_DATA:
      newState.title = action.title;
      newState.content = action.content;
      return newState;
    default:
      return state
  }
}
