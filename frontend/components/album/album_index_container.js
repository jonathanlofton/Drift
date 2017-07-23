import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import { selectAllAlbums } from '../../reducers/selectors';
import AlbumIndex from './album_index';

const mapStateToProps = ({ session, albums }) => ({
  currentUser: session.currentUser,
  albums: selectAllAlbums(albums),
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumIndex)
