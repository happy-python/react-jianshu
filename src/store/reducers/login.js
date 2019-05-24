import { CHANGE_STATUS } from '../actionTypes';

const initialState = {
  status: false
};

// 不要修改state，所以需要新建一个副本，在副本上进行修改
export default function loginReducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case CHANGE_STATUS:
      newState.status = action.value;
      return newState;
    default:
      return state
  }
}
