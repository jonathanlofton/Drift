import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';

const defaultState = {
  byId: {},
  albumPlaylist: [],
};

const albumReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, { byId: action.albums });
    case RECEIVE_ALBUM:
      return Object.assign({}, state, action.album, { albumPlaylist: action.album.songs});
    default:
      return state;
  }
};

export default albumReducer;
