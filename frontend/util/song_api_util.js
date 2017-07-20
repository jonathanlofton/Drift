export const getSongs = () => (
  $.ajax({
    method: 'GET',
    url: '/api/songs',
  })
);

export const getSong = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/songs/${id}`,
  })
);
