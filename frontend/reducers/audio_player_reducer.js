import { RECEIVE_CURRENT_SONG } from '../actions/audio_player_actions';

const defaultState = {
  currentSong: '',
  currentSongPlaying: false,
  currentTime: '',
};


const audioPlayerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      newState.currentSong = action.currentSong;
      return newState;
    default:
      return state;
  }
};

export default audioPlayerReducer;
