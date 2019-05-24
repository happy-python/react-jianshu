import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { changeStatus } from '../../store/actionCreators';
import { LoginWrapper, LoginBox, Input, Button } from './style';

const Login = (props) => {
  return (
    props.status ? <Redirect to='/' /> : 
    <LoginWrapper>
      <LoginBox>
        <Input placeholder='账号'></Input>
        <Input placeholder='密码' type='password'></Input>
        <Button onClick={()=>props.login(true)}>登录</Button>
      </LoginBox>
    </LoginWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    status: state.login.status
  }
}

const mapDispatchToProps = { 
  login: (value) => changeStatus(value)
}

// 使用withRouter获取异步组件路由里面的参数
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))