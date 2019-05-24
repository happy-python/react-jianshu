import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable'; // 导入异步组件
import Login from './pages/login/loadable'; // 导入异步组件
import { GlobalStyle } from './style';
import { IconFontStyle } from './static/iconfont/iconfont';

// 函数组件
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <IconFontStyle />
  
      <BrowserRouter>
        <Header />
        {/* exact精确匹配 */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/detail/:id" component={Detail} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
