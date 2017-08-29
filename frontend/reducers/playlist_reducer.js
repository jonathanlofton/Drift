import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  ADD_PLAYLIST_TO_LIST,
  ADD_SONGS_TO_PLAYLIST,
  MAKE_FIRST_SONG_IN_PLAYLIST,
  LOAD_ARTIST,
  SKIP_SONG,
  PREVIOUS_SONG,
  SHUFFLE_PLAYLIST,
  UNSHUFFLE_PLAYLIST,
  LOOP_PLAYLIST,
} from '../actions/playlist_actions';

import {
  RECEIVE_PLAYLIST_SONG,
} from '../actions/playlist_song_actions';


const defaultState = {
  byId: {},
  currentPlaylist: null,
  songIds: [],
  currentSong: null,
  songInfo: {},
};

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
  return a;
}


const playlistReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, { byId: action.playlists });
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, { currentPlaylist: action.playlist });
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
        songInfo: action.songInfo,
      });
    case LOOP_PLAYLIST:
      const len = state.songIds.length;
      return Object.assign({}, state, {
        currentSong: ((state.currentSong + 1) % len),
      });
    case SKIP_SONG:
      return Object.assign({}, state, {
        currentSong: (state.currentSong + 1),
      });
    case PREVIOUS_SONG:
      if (state.currentSong === 0) {
        return Object.assign({}, state, {
          currentSong: 0,
        })
      }
      return Object.assign({}, state, {
        currentSong: state.currentSong - 1,
      })
    case SHUFFLE_PLAYLIST:
      return Object.assign({}, state, {
        songIds: [state.songIds[0]].concat(shuffle(state.songIds.slice(1))),
      })
    case UNSHUFFLE_PLAYLIST:
      return Object.assign({}, state, {
        songIds: [state.songIds[0]].concat(state.songIds.slice(1).sort()),
      })
    default:
      return state;
  }
};


export default playlistReducer;
