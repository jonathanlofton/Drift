import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const createLogger = require('redux-logger');
  middlewares.push(createLogger());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {
  songs: {
    byId: {},
    playlist: [],
  },
};

const configureStore = (preloadedState = defaultState) => (
  createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, logger)),
  )
);

export default configureStore;
