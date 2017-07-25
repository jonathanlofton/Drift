
export const fetchPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/playlists',
  })
);

export const fetchPlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `/api/playlists/${id}`,
  })
);
