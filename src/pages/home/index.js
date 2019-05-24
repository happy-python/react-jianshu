import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_home_data, changeShowScroll } from '../../store/actionCreators';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
					<Writer />
        </HomeRight>
        
        {
          this.props.showScroll ? <BackTop onClick={this.backTop}>顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  backTop() {
    window.scroll(0, 0);
  }

  componentDidMount() {
    this.props.fetch_home_data()
    window.addEventListener('scroll', () => {
      if (window.document.documentElement.scrollTop > 100) {
        this.props.changeShowScroll(true)
      } else {
        this.props.changeShowScroll(false)
      }
    });
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.home.showScroll
  }
}

const mapDispatchToProps = { 
  fetch_home_data,
  changeShowScroll: (value) => changeShowScroll(value)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)