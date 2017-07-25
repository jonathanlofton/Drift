import React from 'react';
import ReactDOM from 'react-dom';
import { fetchArtists, fetchArtist } from './actions/artist_actions';
import { fetchSongs } from './actions/song_actions';
import { fetchAlbums } from './actions/album_actions';
import { fetchPlaylists } from './actions/playlist_actions';
import { fetchPlaylistSongs } from './actions/playlist_song_actions';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.fetchPlaylists = fetchPlaylists;
  window.fetchSongs = fetchSongs;
  window.fetchArtist = fetchArtist;
  window.fetchArtists = fetchArtists;
  window.fetchAlbums = fetchAlbums;
  window.fetchPlaylistSongs = fetchPlaylistSongs;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
