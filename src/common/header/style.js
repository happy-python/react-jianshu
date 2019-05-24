import styled from 'styled-components';
import logoPic from '../../static/logo.png';

// 以组件的形式导出

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;
  
export const Nav = styled.div`
  width: 940px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  height: 100%;
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.active {
    color: #ea6f5a;
  }
  &.right {
    float: right;
    color: #969696;
  }
`;

// 属性
export const Search = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  background: #eee;
	font-size: 14px;
  color: #666;
  margin-left: 20px;
  margin-top: 9px;
  border: none;
  outline: none;
  padding-left: 20px;
  border-radius: 19px;
  &::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 9px;
  height: 58px;
`;

export const Button = styled.div`
  font-siz: 14px;
  padding: 0 20px;
  margin-right: 20px;
  float: right;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
		color: #ec6149;
  }
  &.write {
		color: #fff;
    background: #ec6149;
	}
`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;