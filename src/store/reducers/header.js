import { SEARCH_FOCUS, SEARCH_BLUR } from '../actionTypes';

const initialState = {
  focused: false
};

// 不要修改state，所以需要新建一个副本，在副本上进行修改
export default function headerReducer(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case SEARCH_FOCUS:
      newState.focused = true;
      return newState;
    case SEARCH_BLUR:
      newState.focused = false;
      return newState;
    default:
      return state
  }
}
