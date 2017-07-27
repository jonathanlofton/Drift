import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';
import { loadArtist } from '../../actions/playlist_actions';

const mapStateToProps = ({ session, albums }) => ({
  session,
  albums,
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  loadArtist: (songIds, songId, songInfo) => dispatch(loadArtist(songIds, songId, songInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumShow);
