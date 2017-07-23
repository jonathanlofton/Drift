import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

// actions are creating JSON objects that will go to a reducer and
// make a change to the state and post it to the store, the reason
// that we have thunk action creators

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album,
});

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums,
});

export const fetchAlbums = () => dispatch => (
  APIUtil.fetchAlbums().then(albums => (
    dispatch(receiveAlbums(albums))
  ))
);

export const fetchAlbum = id => dispatch => (
  APIUtil.fetchAlbum(id).then(album => (
    dispatch(receiveAlbum(album))
  ))
);
