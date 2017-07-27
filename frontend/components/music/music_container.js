import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import Music from './music';

const mapStateToProps = ({ session, playlist }) => ({
  session,
  playlist,
});

const mapDispatchToProps = (dispatch, { location }) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Music);
