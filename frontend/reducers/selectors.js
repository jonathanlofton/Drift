import { values } from 'lodash';

export const selectAllSongs = ( songs ) => (
  Object.keys(songs.byId).map(id => songs.byId[id])
)

export const selectAllAlbums = ( albums ) => values(albums.byId);

export const selectAllArtists = ( artists ) => values(artists.byId);

export const selectMyPlaylists = (playlists) => {
  return playlists.byId.filter(playlist => playlist.created);
};

export const selectFollowedPlaylists = (playlists) => {
  return playlists.byId.filter(playlist => playlist.followed);
};
