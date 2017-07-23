import React from 'react';
import ReactDOM from 'react-dom';
import { fetchArtists, fetchArtist } from './actions/artist_actions';
import { fetchSongs } from './actions/song_actions';
import { fetchAlbums } from './actions/album_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.fetchSongs = fetchSongs;
  window.fetchArtist = fetchArtist;
  window.fetchArtists = fetchArtists;
  window.fetchAlbums = fetchAlbums;
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
