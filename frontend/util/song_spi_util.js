export const getSongs = () => (
  $.ajax({
    method: 'GET',
    url: '/api/songs',
  })
);

export const getSong = (song) => (
  $.ajax({
    method: 'GET',
    url: '/api/songs/${song.id}',
    data: user
  })
);
