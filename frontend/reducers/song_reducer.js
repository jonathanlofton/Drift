import { RECEIVE_SONGS, RECEIVE_CURRENT_SONG } from '../actions/song_actions';

const songReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_CURRENT_SONG:
      return action.song;
    default:
      return state;
  }
};

export default songReducer;
