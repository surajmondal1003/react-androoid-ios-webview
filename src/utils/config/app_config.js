import * as createHistory from 'history';
import { createStore, applyMiddleware } from 'redux';
import IndexReducer from './index-reducer';
import createSagaMiddleware from 'redux-saga';
import IndexSaga from './index-saga';

export const history = createHistory.createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = createStore(IndexReducer, applyMiddleware(...middleware));

sagaMiddleware.run(IndexSaga);

export const baseImgUrl = 'https://nextdoorhub.imgix.net/test/apa-pos/img'