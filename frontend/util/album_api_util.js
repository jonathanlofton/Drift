export const fetchAlbums = () => (
  $.ajax({
    method: 'GET',
    url: '/api/albums',
  })
);

export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/${id}`,
  })
);

// export const fetchAlbumsByArtistId = artistId => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/albums`,
//     success: function (data)
//   })
// )
