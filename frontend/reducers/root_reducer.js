import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ArtistReducer from './artist_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  artists: ArtistReducer,
});

export default RootReducer;
