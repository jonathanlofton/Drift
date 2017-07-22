import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from '../reducers/root_reducer';

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
    applyMiddleware(thunk, logger),
  )
);

export default configureStore;
