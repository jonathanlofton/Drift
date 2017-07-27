import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  ADD_SONG_TO_PLAYLIST,
  ADD_PLAYLIST_TO_LIST,
  ADD_SONGS_TO_PLAYLIST,
  MAKE_FIRST_SONG_IN_PLAYLIST,
  LOAD_ARTIST,
  SKIP_SONG,
  PREVIOUS_SONG,
} from '../actions/playlist_actions';

import {
  RECEIVE_PLAYLIST_SONG,
} from '../actions/playlist_song_actions';


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
    case ADD_SONGS_TO_PLAYLIST:
      return Object.assign({}, state, {
        songIds: action.songs,
      });
    case ADD_PLAYLIST_TO_LIST:
      const newState = Object.assign({}, state);
      newState.byId[action.playlist.id] = action.playlist;
      return newState;
    case MAKE_FIRST_SONG_IN_PLAYLIST:
      return Object.assign({}, state, {
        songIds: [action.song.id],
        currentSong: 0,
      });
    case LOAD_ARTIST:
      return Object.assign({}, state, {
        songIds: action.songIds,
        currentSong: action.songIds.indexOf(action.songId),
      });
    case SKIP_SONG:
      return Object.assign({}, state, {
        currentSong: state.currentSong + 1,
      });
    case PREVIOUS_SONG:
      return Object.assign({}, state, {
        currentSong: state.currentSong - 1,
      })
    default:
      return state;
  }
};


export default playlistReducer;
