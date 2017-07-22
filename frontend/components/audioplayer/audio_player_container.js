import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { fetchSongs } from '../../actions/song_actions';
import { playSong } from '../../actions/audio_player_actions';

const mapStateToProps = state => ({
  songsArray: state.songs,
});

const mapDispatchToProps = dispatch => ({
  playsong: song => dispatch(playSong(song)),
  fetchSongs: () => dispatch(fetchSongs()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioPlayer);
