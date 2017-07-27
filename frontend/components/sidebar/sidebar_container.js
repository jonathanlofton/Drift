import { connect } from 'react-redux';
import SideBar from './sidebar';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = ({ session, playlist }) => ({
  session,
  playlist,
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
