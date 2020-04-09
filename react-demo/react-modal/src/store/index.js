import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import createSagaMiddleware from 'redux-saga';

import reducers from './reducers'

import sagas from '../sagas'

import preloadState from './preloadState'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, preloadState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

export default store;
