import { applyMiddleware, compose, createStore } from 'redux';
import middlewares, { sagaMiddleware } from './middlewares';
import rootReducer from './root-reducer';
import sagas from './root-saga';

const { env: { NODE_ENV }} = process;
const isDevelopment = NODE_ENV !== 'production';
const enhancers = compose(
    applyMiddleware(...middlewares),
    isDevelopment && window && window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(rootReducer, enhancers);
window['store'] = isDevelopment && store;

sagaMiddleware.run(sagas);

export default store;