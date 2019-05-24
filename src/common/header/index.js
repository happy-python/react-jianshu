import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { searchFocus, searchBlur, changeStatus } from '../../store/actionCreators';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Search,
    Addition,
    Button,
    SearchWrapper
} from './style';

// 函数组件，相比类组件，性能更高
const Header = (props) => {
  return (
    <HeaderWrapper>
      <Link to='/'>
        <Logo />
      </Link>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
          {
            props.status ? <NavItem onClick={()=>props.logout(false)} className='right'>退出</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }
        <NavItem className='right'>
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <Search className={props.focused ? 'focused': ''} onFocus={props.searchFocus} onBlur={props.searchBlur}></Search>
          </CSSTransition>
          <span className={props.focused ? 'iconfont zoom focused': 'iconfont zoom'}>&#xe617;</span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='write'><span className="iconfont">&#xe725;</span> 写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

// 因为使用了combineReducers，所以这里是state.header
const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
    status: state.login.status
  }
}

const mapDispatchToProps = { 
  searchFocus,
  searchBlur,
  logout: (value) => changeStatus(value)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)