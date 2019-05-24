import { FETCH_HOME_DATA, SHOW_SCROLL } from '../actionTypes';

const initialState = {
  list: [],
  topic: [],
  recommend: [],
  showScroll: false
};

// 不要修改state，所以需要新建一个副本，在副本上进行修改
export default function homeReducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case FETCH_HOME_DATA:
      newState.list = action.articleList;
      newState.topic = action.topicList;
      newState.recommend = action.recommendList;
      return newState;
    case SHOW_SCROLL:
      newState.showScroll = action.value;
      return newState;
    default:
      return state
  }
}
