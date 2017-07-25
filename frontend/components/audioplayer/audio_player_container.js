import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { fetchSongs } from '../../actions/song_actions';
import { playSong } from '../../actions/audio_player_actions';

const mapStateToProps = ({ songs, playlist }) => ({
  songs: playlist.songIds.map(songId => songs.byId[songId]),
  song: (playlist.currentSong !== null) ? songs.byId[playlist.songIds[playlist.currentSong]] : null,
});

const mapDispatchToProps = dispatch => ({
  playsong: song => dispatch(playSong(song)),
  fetchSongs: () => dispatch(fetchSongs()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioPlayer);
