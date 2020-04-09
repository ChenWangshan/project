import { combineReducers } from 'redux';

import login from './login'
import projects from './projects'

const reducers = combineReducers({
    login,
    projects,
});

export default reducers;
