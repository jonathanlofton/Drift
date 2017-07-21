import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongIndex from './song_index';

const mapStateToProps = ({ session, songs }) => ({
  currentUser: session.currentUser,
  songs,
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SongIndex);
