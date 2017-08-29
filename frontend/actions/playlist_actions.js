import * as APIUtil from '../util/playlist_api_util';

export const LOAD_ARTIST = 'LOAD_ARTIST';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST';
export const ADD_SONGS_TO_PLAYLIST = 'ADD_SONGS_TO_PLAYLIST';
export const ADD_PLAYLIST_TO_LIST = 'ADD_PLAYLIST_TO_LIST';
export const MAKE_FIRST_SONG_IN_PLAYLIST = 'MAKE_FIRST_SONG_IN_PLAYLIST';
export const SKIP_SONG = 'SKIP_SONG';
export const PREVIOUS_SONG = 'PREVIOUS_SONG';
export const SHUFFLE_PLAYLIST = 'SHUFFLE_PLAYLIST';

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

export const makeFirstSongInPlaylist = song => ({
  type: MAKE_FIRST_SONG_IN_PLAYLIST,
  song,
});

export const loadArtist = (songIds, songId, songInfo) => ({
  type: LOAD_ARTIST,
  songIds,
  songId,
  songInfo,
});

export const skipSong = () => ({
  type: SKIP_SONG,
});

export const previousSong = () => ({
  type: PREVIOUS_SONG,
});

export const shufflePlaylist = () => ({
  type: SHUFFLE_PLAYLIST,
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

export const deletePlaylist = id => dispatch => (
  APIUtil.deletePlaylist(id)
);
