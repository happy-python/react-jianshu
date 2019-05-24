import { 
  SEARCH_FOCUS,
  SEARCH_BLUR,
  FETCH_HOME_DATA,
  FETCH_DETAIL_DATA,
  CHANGE_STATUS,
  SHOW_SCROLL
} from './actionTypes';
import axios from 'axios';

// 返回对象类型，采用驼峰命名
// 返回函数类型，采用下划线命名

// 返回对象类型
export const searchFocus = () => (
  {
    'type': SEARCH_FOCUS
  }
)

// 返回对象类型
export const searchBlur = () => (
  {
    'type': SEARCH_BLUR
  }
)

// 返回对象类型
const fetchHomeData = (res) => {
  const { articleList, topicList, recommendList } = res.data.data

  return {
    'type': FETCH_HOME_DATA,
    'articleList': articleList,
    'topicList': topicList,
    'recommendList': recommendList
  }
}

// 异步操作，返回函数类型
export const fetch_home_data = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const action = fetchHomeData(res)
      dispatch(action)
    })
  }
}

// 返回对象类型
const fetchDetailData = (res) => {
  const { title, content } = res.data.data

  return {
    'type': FETCH_DETAIL_DATA,
    'title': title,
    'content': content,
  }
}

// 异步操作，返回函数类型
export const fetch_detail_data = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then(res => {
      const action = fetchDetailData(res)
      dispatch(action)
    })
  }
}

// 返回对象类型
export const changeStatus = (value) => (
  {
    'type': CHANGE_STATUS,
    value
  }
)

// 返回对象类型
export const changeShowScroll = (value) => (
  {
    'type': SHOW_SCROLL,
    value
  }
)