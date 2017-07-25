import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, ADD_SONG_TO_PLAYLIST } from '../actions/playlist_actions';


const defaultState = {
  byId: {},
  currentPlaylist: null,
  songIds: [],
  currentSong: null,
};


const playlistReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, { byId: action.playlists });
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, { currentPlaylist: action.playlist });
    case ADD_SONG_TO_PLAYLIST:
      return Object.assign({}, state, { songIds: songIds.push(action.songId)} );
    default:
      return state;
  }
};


export default playlistReducer;
