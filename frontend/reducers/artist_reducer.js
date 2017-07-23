import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';

const defaultState = {
  byId: {},
};

const artistReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTISTS:
      return Object.assign({}, state, { byId: action.artists });
    case RECEIVE_ARTIST:
      return Object.assign({}, state, action.artist);
    default:
      return state;
  }
};

export default artistReducer;
