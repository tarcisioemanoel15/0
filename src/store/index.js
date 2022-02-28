import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleare from 'redux-saga';

import rootreducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleare();

const store = createStore(rootreducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
