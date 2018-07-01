import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './static/css/common.less';
import './static/css/font.css';

import RouterMap from './router/routerMap';

// 创建 redux 的 store 对象
const store = configureStore();

render(
	<Provider store={store}>
		<RouterMap history={hashHistory} />
	</Provider>,
    document.getElementById('root')
)
