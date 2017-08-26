import { connect } from 'react-redux';
import Search from './search';
import { requestSearchResults, clearSearch } from '../../actions/search_actions';

const mapStateToProps = ({ session }) => ({
  artists: selectAllTracks(state),
  fetching: state.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  requestSearchResults: (search) => dispatch(requestSearchResults(search)),
  clearSearch: () => dispatch(clearSearch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
