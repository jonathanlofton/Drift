import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongIndex from './song_index';
import { selectAllSongs } from '../../reducers/selectors';
import { receiveCurrentSong } from '../../actions/audio_player_actions';
import { addSongsToPlaylist, makeFirstSongInPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = ({ session, songs }) => ({
  currentUser: session.currentUser,
  songs: selectAllSongs(songs),
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
  addSongsToPlaylist: songs => dispatch(addSongsToPlaylist(songs)),
  makeFirstSongInPlaylist: song => dispatch(makeFirstSongInPlaylist(song)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SongIndex);
