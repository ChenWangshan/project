import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import NotFound from '../Common/NotFound'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { message } from 'antd';

import routers from '../../router'

import actionTypes from '../../store/actions/actionTypes';

import config from '../../config'

import './App.scss';

// 滚动高度
const scroll = {
    width: '100%',
    height: 220,
};

const { projectDir, prefix } = config;
const { HOME_URL } = window.TDT_CONFIG;

const url = HOME_URL + prefix;

class App extends React.Component {
    render () {
        const { 
            login: { username, role },
        } = this.props;

        // 路由
        const routes = routers.map((RouterItem, index) => {

            function renderProps (props) {
                
                return <RouterItem.component {...props} />;
            }

            return <Route key={ index } path={ RouterItem.path } exact render={ renderProps } />
        })

        return (
            <Scrollbars
                autoHeightMin={ 0 }
                autoHeightMax={ scroll.height }
                style={{ width: scroll.width}} >
                <Router basename={projectDir}>
                    <Switch>
                        { routes }
                        <Route component={ NotFound } />
                    </Switch>
                </Router>
            </Scrollbars>
        );
    }
}

function mapStateToProps(state) {
    const { login } = state;
    return {
        login
    }
}

export default connect(mapStateToProps)(App);
