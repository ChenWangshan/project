import http from 'axios';
import qs from 'qs';

import { message } from 'antd';

import config from '../config';

const { prefix } = config;

http.defaults.withCredentials=true;

let sessionInvalidate = true;

const interceptor = http.create({
    baseURL: prefix,
    timeout: 100000
});

interceptor.interceptors.request.use( config => {
    let method = config.method.toLowerCase();
    if (method ==='post' || method === 'put'){
        if(Array.isArray(config.data)){
            config.headers['content-type'] = "application/json;charset=utf-8";
            config.data = JSON.stringify(config.data);
        } else {
            config.data = qs.stringify(config.data);
        }
    }
    
    return config;
}, error => {
    message.error('请求发生异常');
    return {
        statusInfo: {
            msg: '服务器请求异常',
            status: 'error'
        }
    }
});

// 失败的url地址集合，集合内的url不需要弹出异常提示。
// 成功的url地址集合，集合内的url需要弹出异常提示。
const failureUrls = ['/verify'], successUrls = ['/updateBatch'];

interceptor.interceptors.response.use(res => {

    let { config:{ method, url }, data:{ code, msg, data } } = res;

    // TODO: 需要后台返回登录失效信息
    if(data !== null && typeof data === 'string'){
        data = JSON.parse(data);
    }

    let status = 'success';

    if(method === 'get' && data === null){
        status = 'error';
    } 

    if (code !== 200){

        let exist = failureUrls.find(failureUrl => {
            return url.indexOf(failureUrl) > -1;
        });

        if (!exist) {
            message.error(msg);
        }

        if(code === 9999){
            message.error('服务器异常');
        }

        status = 'error';
    } else {

        let exist = successUrls.find(successUrl => {
            return url.indexOf(successUrl) > -1;
        });

        if (exist) {
            message.success(msg);
        }

        status = 'success';
        msg = '';
    }

    data = data ? data : {};
    
    data.statusInfo = {
        status,
        code,
        msg
    };

    return data;
}, error => {
    let msg = '服务器响应异常', code = 500;

    // 302，响应内容为undefined
    if(typeof error.response === 'undefined'){
        msg = '登录失效';
        code = 401;
        if(sessionInvalidate){
            message.error(msg);
            sessionInvalidate = false;
        }
    } else {
        message.error(msg);
    }
    
    return {
        statusInfo: {
            msg,
            code,
            status: 'error'
        }
    };
});

export default interceptor;
