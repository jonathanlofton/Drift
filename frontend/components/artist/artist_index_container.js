import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions';
import ArtistIndex from './artist_index';

const mapStateToProps = ({ session, artists }) => ({
  currentUser: session.currentUser,
  artists,
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistIndex);
