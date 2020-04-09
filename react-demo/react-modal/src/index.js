import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import store from './store'

import './index.css';
import App from './components/App/App';

const appElement = document.getElementById('app');

ReactDOM.render(
    <Provider store={ store }>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </Provider>,
    appElement
);
