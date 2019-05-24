import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetch_detail_data } from '../../store/actionCreators';
import { DetailWrapper, Header, Content } from './style';

// 函数组件
class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html:this.props.content}}></Content>
      </DetailWrapper>
    )
  }
  
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetch_detail_data(id)
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.detail.title,
    content: state.detail.content
  }
}

const mapDispatchToProps = { 
  fetch_detail_data: (id) => fetch_detail_data(id) 
}

// 使用withRouter获取异步组件路由里面的参数
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))