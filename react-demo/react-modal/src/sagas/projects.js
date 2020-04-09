import { takeLatest, call, put, fork } from 'redux-saga/effects'

import actionTypes from '../store/actions/actionTypes'
import api from '../api'

const { 
    projects:{
        PROJECTS_GET_SAGA
        /** Saga **/
    }, 
} = actionTypes;

/**
 * action 任务监听
 */
function* saga() {
}

export default saga;