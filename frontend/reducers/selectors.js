import { values } from 'lodash';

export const selectAllSongs = ( songs ) => (
  Object.keys(songs.byId).map(id => songs.byId[id])
)

export const selectAllAlbums = ( albums ) => values(albums.byId);

export const selectAllArtists = ( artists ) => values(artists.byId);
