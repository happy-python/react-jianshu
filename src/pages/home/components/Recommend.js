import React from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

// 函数组件
const Recommend = (props) => {
  return (
    <RecommendWrapper>
      {
        props.list.map(item => {
          return (
            <RecommendItem key={item.id} imgUrl={process.env.PUBLIC_URL + item.imgName}></RecommendItem>
          )
        })
      }
    </RecommendWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.home.recommend
  }
}

export default connect(mapStateToProps, null)(Recommend);