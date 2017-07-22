import { RECEIVE_SONGS, RECEIVE_CURRENT_SONG } from '../actions/song_actions';

const defaultState = {
  byId: {},
  playlist: [],
};

const songReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONGS:
      return Object.assign({}, state, { byId: action.songs });
    case RECEIVE_CURRENT_SONG:
      return Object.assign({}, state, { playlist: [action.song].concat(state.playlist.slice(1)) });
    default:
      return state;
  }
};

export default songReducer;
