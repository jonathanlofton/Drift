import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST';
export const ADD_PLAYLIST_TO_LIST = 'ADD_PLAYLIST_TO_LIST';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists,
});

export const addPlaylistToList = playlist => ({
  type: ADD_PLAYLIST_TO_LIST,
  playlist,
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist,
});

export const addSongToPlaylist = songId => ({
  type: ADD_SONG_TO_PLAYLIST,
  songId,
});

export const fetchPlaylists = () => dispatch => (
  APIUtil.fetchPlaylists().then(playlists => (
    dispatch(receivePlaylists(playlists))),
  )
);

export const fetchPlaylist = id => dispatch => (
  APIUtil.fetchPlaylist(id).then(playlist => (
    dispatch(receivePlaylist(playlist))),
  )
);

export const createPlaylist = data => dispatch => (
  APIUtil.createPlaylist(data).then(playlist => (
    dispatch(addPlaylistToList(playlist))),
  )
);
