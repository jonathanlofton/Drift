import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

const artistReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      return action.artist;
    default:
      return state;
  }
};

export default artistReducer;
