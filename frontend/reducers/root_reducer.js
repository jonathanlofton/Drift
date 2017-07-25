import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ArtistReducer from './artist_reducer';
import SongReducer from './song_reducer';
import AudioPlayerReducer from './audio_player_reducer';
import AlbumReducer from './album_reducer';
import PlaylistReducer from './playlist_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  artists: ArtistReducer,
  songs: SongReducer,
  player: AudioPlayerReducer,
  albums: AlbumReducer,
  playlist: PlaylistReducer,
});

export default RootReducer;
