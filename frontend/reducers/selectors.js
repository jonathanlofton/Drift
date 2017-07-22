import { values } from 'lodash';

export const selectAllSongs = ( songs ) => values(songs.byId);
