
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
