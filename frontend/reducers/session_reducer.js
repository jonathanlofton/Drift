import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const nullState = Object.freeze({
  currentUser: null,
  errors: [],
});

const SessionReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, nullState, {
        currentUser,
      });
    case CLEAR_ERRORS:
      return Object.assign({}, state, {
        errors: [],
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, {
        errors,
      });
    default:
      return state;
  }
};

export default SessionReducer;
