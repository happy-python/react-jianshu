import React from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

const Topic = (props) => {
  return (
    <TopicWrapper>
      {
        props.list.map(item => {
          return (
            <TopicItem key={item.id}>
              <img className='topic-pic' src={item.imgUrl} alt='' />
							{item.title}
            </TopicItem>
          )
        })
      }
    </TopicWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.home.topic
  }
}

export default connect(mapStateToProps, null)(Topic);