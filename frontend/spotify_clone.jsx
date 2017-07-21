import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
import { fetchArtists, fetchArtist } from './actions/artist_actions';
import { getSongs, getSong } from './util/song_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getSongs = getSongs;
  window.getSong = getSong;
  window.fetchArtist = fetchArtist;
  window.fetchArtists = fetchArtists;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
