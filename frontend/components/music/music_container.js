import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Music from './music';

const mapStateToProps = ({ session }) => ({
  
});

const mapDispatchToProps = (dispatch, { location }) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Music);
