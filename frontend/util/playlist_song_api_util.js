
export const fetchPlaylistSongs = () => (
  $.ajax({
    method: 'GET',
    url: '/api/playlist_songs',
  })
);

export const fetchPlaylistSong = id => (
  $.ajax({
    method: 'GET',
    url: `/api/playlist_songs/${id}`,
  })
);

export const createPlaylistSong = data => (
  $.ajax({
    method: 'POST',
    url: `/api/playlist_songs`,
    data
  })
);

export const deletePlaylistSong = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlist_songs/${id}`,
  })
);
