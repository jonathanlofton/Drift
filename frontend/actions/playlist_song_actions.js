import * as APIUtil from '../util/playlist_song_api_util';

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const RECEIVE_PLAYLIST_SONGS = 'RECEIVE_PLAYLIST_SONGS';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const receivePlaylistSongs = playlistSongs => ({
  type: RECEIVE_PLAYLIST_SONGS,
  playlistSongs,
});

export const receivePlaylistSong = playlistSong => ({
  type: RECEIVE_PLAYLIST_SONG,
  playlistSong,
});

export const fetchPlaylistSongs = () => dispatch => (
  APIUtil.fetchPlaylistSongs().then(playlistSongs => (
    dispatch(receivePlaylistSongs(playlistSongs))),
  )
);

export const fetchPlaylistSong = id => dispatch => (
  APIUtil.fetchPlaylistSong(id).then(playlistSong => (
    dispatch(receivePlaylistSong(playlistSong))),
  )
);

export const createPlaylistSong = (playlistId, songId) => dispatch => (
  APIUtil.createPlaylistSong(playlistId, songId).then(playlistSong => dispatch(receivePlaylistSong(playlistSong)))
);

export const deletePlaylistSong = playlistSongId => (
  APIUtil.deletePlaylistSong(playlistSongId)
)
