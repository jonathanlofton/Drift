import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ArtistReducer from './artist_reducer';
import SongReducer from './song_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  artists: ArtistReducer,
  songs: SongReducer,
});

export default RootReducer;
