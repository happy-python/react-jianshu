import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
  return (
    <div>正在加载</div>
  )
}

const LoadableComponent = Loadable({
    loader: () => import('./index.js'),
    loading: Loading,
});

export default () => <LoadableComponent/>