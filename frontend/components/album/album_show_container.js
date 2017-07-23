import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';

const mapStateToProps = ({ session }) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumShow);
