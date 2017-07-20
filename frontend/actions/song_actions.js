
import * as APIUtil from '../util/song_api_util';

export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_SONGS = 'RECEIVE_ERRORS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

// actions are creating JSON objects that will go to a reducer and
// make a change to the state and post it to the store, the reason
// that we have thunk action creators

export const receiveCurrentSong = currentSong => ({
  type: RECEIVE_CURRENT_SONG,
  currentSong,
});

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs,
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song,
});

// Thunk action creators need to make an AJAX call before it can go to
// the reducer so when thunk our middle ware sees we are passing a function
// (which is an ajax request) it will perform that function and then dispatch
// a regular action creator that will pass a regular object to the reducer

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
