import { values } from 'lodash';

export const selectAllSongs = ( songs ) => values(songs.byId);

export const selectAllAlbums = ( albums ) => values(albums.byId);

// export const selectAllArtists = ( artists ) => values(artists.byId);
