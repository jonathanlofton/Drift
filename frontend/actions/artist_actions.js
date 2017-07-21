import * as APIUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

// actions are creating JSON objects that will go to a reducer and
// make a change to the state and post it to the store, the reason
// that we have thunk action creators

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist,
});

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists,
});

export const fetchArtists = () => dispatch => (
  APIUtil.fetchArtists().then(artists => (
    dispatch(receiveArtists(artists))
  ))
);

export const fetchArtist = id => dispatch => (
  APIUtil.fetchArtists(id).then(artist => (
    dispatch(receiveArtist(artist))
  ))
);
